import { deleteLlm, pageListLlm } from '@/services/writing/llm';
// @ts-ignore
import type { Llm } from '@/services/writing/typings';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Button, Space, message, Modal, Popconfirm } from 'antd';
import React, { useState } from 'react';
import LlmForm from './components/LlmForm';

const LlmManagement: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingLlm, setEditingLlm] = useState<Llm | null>(null);

  const columns: ProColumns<Llm>[] = [
    {
      title: '模型名称',
      dataIndex: 'modelName',
      key: 'modelName',
      search: true,
    },
    {
      title: '模型别名',
      dataIndex: 'modelAlias',
      key: 'modelAlias',
      search: true,
    },
    {
      title: '基础URL',
      dataIndex: 'modelBaseUrl',
      key: 'modelBaseUrl',
      search: false,
    },
    {
      title: 'HTTP Proxy',
      dataIndex: 'httpProxy',
      key: 'httpProxy',
      search: false,
    },
    {
      title: '操作',
      valueType: 'option',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type="link" onClick={() => handleEdit(record)}>
            编辑
          </Button>
          <Popconfirm
            title="确认删除"
            description={`确定要删除模型"${record.modelName}"吗？`}
            onConfirm={() => handleDelete(record)}
            okText="确认"
            cancelText="取消"
          >
            <Button type="link" danger>
              删除
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const handleAdd = () => {
    setEditingLlm(null);
    setIsModalVisible(true);
  };

  const handleEdit = (llm: Llm) => {
    setEditingLlm(llm);
    setIsModalVisible(true);
  };

  const handleDelete = async (record: Llm) => {
    if (!record.id) return;
    try {
      await deleteLlm(record);
      message.success('删除成功');
      actionRef.current?.reload();
    } catch (error) {
      message.error('删除失败');
    }
  };

  const actionRef = React.useRef<ActionType>();

  return (
    <div style={{ padding: 24 }}>
      <ProTable<Llm>
        columns={columns}
        actionRef={actionRef}
        cardBordered
        request={async (params = {}) => {
          const { current, pageSize, ...rest } = params;
          const result = await pageListLlm({
            pageNo: current,
            pageSize,
            ...rest,
          });
          return {
            data: result?.data?.list || [],
            success: true,
            total: result.data?.total || 0,
          };
        }}
        rowKey="id"
        search={{
          labelWidth: 'auto',
        }}
        toolBarRender={() => [
          <Button key="add" type="primary" onClick={handleAdd}>
            添加模型
          </Button>,
        ]}
      />
      <LlmForm
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onSuccess={() => {
          setIsModalVisible(false);
          actionRef.current?.reload();
        }}
        initialValues={editingLlm}
      />
    </div>
  );
};

export default LlmManagement;
