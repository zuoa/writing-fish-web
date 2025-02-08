import { Button, Form, Input, message, Modal } from 'antd';
import React from 'react';
// @ts-ignore
import { createLlm, testLlm, updateLlm } from '@/services/writing/llm';
// @ts-ignore
import type { Llm } from '@/services/writing/typings';

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
  const [testResponse, setTestResponse] = React.useState('');

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

  const handleTest = async () => {
    try {
      const values = await form.validateFields();
      console.log(values);
      const data = await testLlm(values)
      setTestResponse(data.data || '');
      message.success(data.message);
    } catch (error) {
      console.log(error);
      message.error('测试失败');
    }
  };

  return (
    <Modal
      title={initialValues ? '编辑模型' : '添加模型'}
      open={visible}
      onCancel={onCancel}
      footer={[
        <Button key="test" onClick={handleTest}>
          测试连接
        </Button>,
        <Button key="cancel" onClick={onCancel}>
          取消
        </Button>,
        <Button key="submit" type="primary" onClick={handleSubmit}>
          确定
        </Button>,
      ]}
      destroyOnClose
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{ 
          ...initialValues || {},
          testPrompt: "你是谁？"
        }}
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
        <Form.Item
          name="testPrompt"
          label="测试提示词"
        >
          <Input.TextArea 
            placeholder="请输入测试提示词" 
            rows={4}
            defaultValue="你是谁？"
          />
        </Form.Item>
        <div style={{ marginBottom: 24 }}>
          <div style={{ marginBottom: 8 }}>测试结果</div>
          <Input.TextArea
            rows={4}
            readOnly
            disabled
            placeholder="测试结果"
            value={testResponse}
          />
        </div>
      </Form>
    </Modal>
  );
};

export default LlmForm;
