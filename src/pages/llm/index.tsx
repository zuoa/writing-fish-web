import React, { useEffect, useState } from 'react';
import { Table, Button, Space, Modal, message } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { Llm } from '@/services/writing/typings';
import LlmForm from './components/LlmForm';
import { pageListLlm, deleteLlm, listLlm } from '@/services/writing/llm';

const LlmManagement: React.FC = () => {
  const [llms, setLlms] = useState<Llm[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingLlm, setEditingLlm] = useState<Llm | null>(null);

  const columns: ColumnsType<Llm> = [
    {
      title: '模型名称',
      dataIndex: 'modelName',
      key: 'modelName',
    },
    {
      title: '模型别名',
      dataIndex: 'modelAlias',
      key: 'modelAlias',
    },
    {
      title: '基础URL',
      dataIndex: 'modelBaseUrl',
      key: 'modelBaseUrl',
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type="link" onClick={() => handleEdit(record)}>
            编辑
          </Button>
          <Button type="link" danger onClick={() => handleDelete(record.id)}>
            删除
          </Button>
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

  const handleDelete = async (id?: number) => {
    if (!id) return;
    try {
      await deleteLlm(id);
      message.success('删除成功');
      fetchLlmList();
    } catch (error) {
      message.error('删除失败');
    }
  };

  const fetchLlmList = async () => {
    try {
      const data = await listLlm({  });
      setLlms(data.data || []);
    } catch (error) {
      message.error('获取列表失败');
    }
  };

  useEffect(() => {
    fetchLlmList();
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <div style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={handleAdd}>
          添加模型
        </Button>
      </div>
      <Table columns={columns} dataSource={llms} rowKey="id" />
      <LlmForm
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onSuccess={() => {
          setIsModalVisible(false);
          fetchLlmList();
        }}
        initialValues={editingLlm}
      />
    </div>
  );
};

export default LlmManagement; 