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
      width={500}
      open={visible}
      onOpenChange={onVisibleChange}
      initialValues={current}
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
      <ProFormText
        name="agentName"
        label="Agent名称"
        rules={[{ required: true, message: '请输入Agent名称' }]}
      />
      <ProFormSelect
        name="agentModelId"
        label="LLM模型"
        rules={[{ required: true, message: '请选择LLM模型' }]}
        request={async () => {
          // 这里需要调用获取模型列表的接口
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
        options={[
          { label: '类型1', value: 'type1' },
          { label: '类型2', value: 'type2' },
        ]}
      />
      <ProFormTextArea
        name="agentPrompt"
        label="提示词"
        rules={[{ required: true, message: '请输入提示词' }]}
      />
    </ModalForm>
  );
};

export default AgentModal; 