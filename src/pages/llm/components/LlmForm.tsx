import React from 'react';
import { Modal, Form, Input, message } from 'antd';
// @ts-ignore
import type { Llm } from '@/services/writing/typings';
import { createLlm, updateLlm } from '@/services/writing/llm';

interface LlmFormProps {
  visible: boolean;
  onCancel: () => void;
  onSuccess: () => void;
  initialValues?: Llm | null;
}

const LlmForm: React.FC<LlmFormProps> = ({
  visible,
  onCancel,
  onSuccess,
  initialValues,
}) => {
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      
      if (initialValues?.id) {
        values.id = initialValues.id;
        await updateLlm(values);
      } else {
        await createLlm(values);
      }

      message.success(`${initialValues ? '更新' : '创建'}成功`);
      onSuccess();
      form.resetFields();
    } catch (error) {
      message.error(`${initialValues ? '更新' : '创建'}失败`);
    }
  };

  return (
    <Modal
      title={initialValues ? '编辑模型' : '添加模型'}
      open={visible}
      onCancel={onCancel}
      onOk={handleSubmit}
      destroyOnClose
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={initialValues || {}}
        preserve={false}
      >
        <Form.Item
          name="modelName"
          label="模型名称"
          rules={[{ required: true, message: '请输入模型名称' }]}
        >
          <Input placeholder="请输入模型名称" />
        </Form.Item>

        <Form.Item
          name="modelAlias"
          label="模型别名"
          rules={[{ required: false, message: '请输入模型别名' }]}
        >
          <Input placeholder="请输入模型别名" />
        </Form.Item>
        <Form.Item
          name="modelBaseUrl"
          label="基础URL"
          rules={[{ required: true, message: '请输入基础URL' }]}
        >
          <Input placeholder="请输入基础URL" />
        </Form.Item>

        <Form.Item
          name="modelApiKey"
          label="API密钥"
          rules={[{ required: true, message: '请输入API密钥' }]}
        >
          <Input.Password placeholder="请输入API密钥" />
        </Form.Item>
        <Form.Item
          name="httpProxy"
          label="HTTP Proxy"
          rules={[{ required: false, message: '请输入代理地址' }]}
        >
          <Input placeholder="请输入代理地址" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default LlmForm; 