import { PageContainer } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { Button, message, Popconfirm } from 'antd';
import { useRef, useState } from 'react';
import AgentModal from './components/AgentModal';
import { deleteAgent, listAgent, pageListAgent } from '@/services/writing/agent'; // 需要创建对应的 API 服务

type TableItem = API.AgentDto;

const AgentList: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentRow, setCurrentRow] = useState<TableItem>();
  const actionRef = useRef<ActionType>();

  const columns: ProColumns<TableItem>[] = [
    {
      title: 'Agent名称',
      dataIndex: 'agentName',
    },
    {
      title: 'Agent类型',
      dataIndex: 'agentType',
    },
    {
      title: '提示词',
      dataIndex: 'agentPrompt',
      ellipsis: true,
    },
    {
      title: '创建时间',
      dataIndex: 'createAt',
      valueType: 'dateTime',
    },
    {
      title: '更新时间',
      dataIndex: 'updateAt',
      valueType: 'dateTime',
    },
    {
      title: '操作',
      valueType: 'option',
      render: (_, record) => [
        <a
          key="edit"
          onClick={() => {
            setCurrentRow(record);
            setModalVisible(true);
          }}
        >
          编辑
        </a>,
        <Popconfirm
          key="delete"
          title="确定要删除吗？"
          onConfirm={async () => {
            if (record.id) {
              await deleteAgent(record.id);
              message.success('删除成功');
              actionRef.current?.reload();
            }
          }}
        >
          <a>删除</a>
        </Popconfirm>,
      ],
    },
  ];

  return (
    <PageContainer>
      <ProTable<TableItem>
        headerTitle="Agent列表"
        actionRef={actionRef}
        rowKey="id"
        search={false}
        toolBarRender={() => [
          <Button
            type="primary"
            key="add"
            onClick={() => {
              setCurrentRow(undefined);
              setModalVisible(true);
            }}
          >
            新建
          </Button>,
        ]}
        request={async (params) => {
          const { data } = await pageListAgent({
            pageNo: params.current,
            pageSize: params.pageSize,
          });
          return {
            data: data?.list || [],
            success: true,
            total: data?.total || 0,
          };
        }}
        columns={columns}
      />
      <AgentModal
        visible={modalVisible}
        onVisibleChange={setModalVisible}
        current={currentRow}
        onSuccess={() => {
          setModalVisible(false);
          actionRef.current?.reload();
        }}
      />
    </PageContainer>
  );
};

export default AgentList; 