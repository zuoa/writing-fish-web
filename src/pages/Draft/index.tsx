import React, { useState } from 'react';
import { Card, Input, Button, Table, message, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import styles from './index.less';

interface DraftItem {
  id: string;
  title: string;
  source: string;
  createTime: string;
  status: string;
}

const DraftsPage: React.FC = () => {
  const [drafts, setDrafts] = useState<DraftItem[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [sourceUrl, setSourceUrl] = useState('');

  // 表格列配置
  const columns = [
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '来源',
      dataIndex: 'source',
      key: 'source',
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '操作',
      key: 'action',
      render: (_: any, record: DraftItem) => (
        <span>
          <a onClick={() => handleEdit(record)}>编辑</a>
          <a style={{ marginLeft: 16 }} onClick={() => handleDelete(record)}>删除</a>
        </span>
      ),
    },
  ];

  // 处理添加草稿
  const handleAddDraft = async () => {
    try {
      // TODO: 调用后端API解析文章
      message.success('草稿添加成功');
      setIsModalVisible(false);
      setSourceUrl('');
      // 刷新列表
    } catch (error) {
      message.error('添加失败');
    }
  };

  const handleEdit = (record: DraftItem) => {
    // TODO: 实现编辑功能
  };

  const handleDelete = (record: DraftItem) => {
    // TODO: 实现删除功能
  };

  return (
    <div className={styles.container}>
      <Card>
        <div className={styles.toolbar}>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => setIsModalVisible(true)}
          >
            添加草稿
          </Button>
        </div>
        <Table
          columns={columns}
          dataSource={drafts}
          rowKey="id"
        />
      </Card>

      <Modal
        title="添加草稿"
        visible={isModalVisible}
        onOk={handleAddDraft}
        onCancel={() => {
          setIsModalVisible(false);
          setSourceUrl('');
        }}
      >
        <Input
          placeholder="请输入文章链接"
          value={sourceUrl}
          onChange={(e) => setSourceUrl(e.target.value)}
        />
      </Modal>
    </div>
  );
};

export default DraftsPage; 