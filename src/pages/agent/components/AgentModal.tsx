import {
  ModalForm,
  ProFormText,
  ProFormTextArea,
  ProFormSelect,
} from '@ant-design/pro-components';
import { message } from 'antd';
import { createAgent, updateAgent } from '@/services/writing/agent'; // 需要创建对应的 API 服务
import { listLlm } from '@/services/writing/llm'; // 需要创建对应的 API 服务

interface Props {
  visible: boolean;
  onVisibleChange: (visible: boolean) => void;
  current?: API.AgentDto;
  onSuccess: () => void;
}

const AgentModal: React.FC<Props> = (props) => {
  const { visible, onVisibleChange, current, onSuccess } = props;

  return (
    <ModalForm
      title={current ? '编辑Agent' : '新建Agent'}
      width={800}
      open={visible}
      onOpenChange={onVisibleChange}
      initialValues={current}
      modalProps={{
        destroyOnClose: true,
        maskClosable: false,
        style: { top: 20 },
      }}
      onFinish={async (values) => {
        try {
          if (current?.id) {
            await updateAgent({ ...values, id: current.id });
          } else {
            await createAgent(values);
          }
          message.success('操作成功');
          onSuccess();
          return true;
        } catch (error) {
          return false;
        }
      }}
    >
      <div style={{ display: 'flex', gap: '16px' }}>
        <ProFormText
          name="agentName"
          label="Agent名称"
          rules={[{ required: true, message: '请输入Agent名称' }]}
          width="sm"
        />
        <ProFormSelect
          name="agentModelId"
          label="LLM模型"
          rules={[{ required: true, message: '请选择LLM模型' }]}
          width="sm"
          request={async () => {
            const { data } = await listLlm({});
            return (data || []).map((item: any) => ({
              label: item.modelName,
              value: item.id,
            }));
          }}
        />
        <ProFormSelect
          name="agentType"
          label="Agent类型"
          rules={[{ required: true, message: '请选择Agent类型' }]}
          width="sm"
          options={[
            { label: '类型1', value: 'type1' },
            { label: '类型2', value: 'type2' },
          ]}
        />
      </div>
      <ProFormTextArea
        name="agentPrompt"
        label="提示词"
        rules={[{ required: true, message: '请输入提示词' }]}
        fieldProps={{
            rows:40,
          showCount: true,
          style: { 
            fontSize: '14px',
            fontFamily: 'monospace',
          },
        }}
      />
    </ModalForm>
  );
};

export default AgentModal; 