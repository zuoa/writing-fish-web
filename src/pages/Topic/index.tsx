import React, { useEffect, useState } from 'react';
import { Card, Button, Modal, Form, Input, List, message, Radio, Tabs, Tag } from 'antd';
import { PlusOutlined, LinkOutlined, EditOutlined, FileTextOutlined } from '@ant-design/icons';
import './index.less';
import { addTopic, queryTopicList } from '@/services/demo/TopicController';
import styles from './index.less';
import { addMaterial, fetchUrl } from '@/services/demo/MaterialController';
import { history } from 'umi';

const { TextArea } = Input;
const { TabPane } = Tabs;

interface Material {
  id: number;
  type: 'main' | 'auxiliary';  // 主要素材或辅助素材
  title: string;  // 新增标题字段
  content: string;
  inputType: 'url' | 'manual';
}

const TopicsPage: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isMaterialModalVisible, setIsMaterialModalVisible] = useState(false);
  const [currentTopicId, setCurrentTopicId] = useState<number | null>(null);
  const [form] = Form.useForm();
  const [materialForm] = Form.useForm();
  const [isUrlFetching, setIsUrlFetching] = useState(false);

  const [topics, setTopics] = useState<[]>([]);

  useEffect(() => {
    // 这里应该调用API获取数据
    queryTopicList({
      page: 1,
      page_size: 10
    }).then(res => {
      console.log(res);
      setTopics(res.data.list);
    })

  }, []);

  const handleAdd = async (values: any) => {
    try {

      addTopic(values).then(res => {
        console.log(res);
        message.success('添加成功');
        setIsModalVisible(false);
        form.resetFields();
      });
    } catch (error) {
      message.error('添加失败');
    }
  };

  const handleUrlFetch = async () => {
    const url = materialForm.getFieldValue('url');
    if (!url) {
      message.error('请输入链接地址');
      return;
    }

    try {
      setIsUrlFetching(true);
      message.loading('正在解析链接...', 0);

      const resp = await fetchUrl({url})
      // 实际项目中这里应该调用后端API
      // await new Promise(resolve => setTimeout(resolve, 1500));
      
      // 模拟解析结果
      materialForm.setFieldsValue({
        title: resp?.data?.title,  // 这里应该是API返回的标题
        content: resp?.data?.content  // 这里应该是API返回的内容
      });
      message.destroy();
      message.success('解析成功');
    } catch (error) {
      message.error('链接解析失败');
    } finally {
      setIsUrlFetching(false);
    }
  };


  const showMaterialModal = (topicId: number) => {
    setCurrentTopicId(topicId);
    setIsMaterialModalVisible(true);
  };

  return (
    <div className={styles.topicManagement}>
      <div className={styles.topicHeader}>
        <h2 className={styles.title}>选题列表</h2>
        <Button 
          type="primary" 
          icon={<PlusOutlined />}
          onClick={() => setIsModalVisible(true)}
        >
          新增选题
        </Button>
      </div>

      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 1,
          md: 2,
          lg: 2,
          xl: 3,
          xxl: 3,
        }}
        dataSource={topics}
        renderItem={(topic) => (
          <List.Item>
            <Card 
              title={
                <a onClick={() => history.push(`/topic/${topic.id}`)}>{topic.title}</a>
              }
              className={styles.topicCard}
              hoverable
              extra={
                <Tag color="blue">{topic.materials?.length || 0} 个素材</Tag>
              }
            >
              <div className={styles.cardContent}>
                <div className={styles.description}>
                  <p>{topic.description}</p>
                </div>
                <div className={styles.keyPoints}>
                  <h4>输出要点：</h4>
                  <p>{topic.points}</p>
                </div>
                {topic.materials?.length > 0 && (
                  <div className={styles.materials}>
                    <h4>素材列表：</h4>
                    <List
                      size="small"
                      dataSource={topic.materials}
                      renderItem={material => (
                        <List.Item>
                          <div className={styles.materialItem}>
                            <div className={styles.materialHeader}>
                              <span className={`${styles.materialType} ${styles[material.type]}`}>
                                {material.type === 'main' ? '主要' : '辅助'}
                              </span>
                              <span className={styles.materialTitle}>
                                {material.inputType === 'url' ? (
                                  <a href={material.content} target="_blank" rel="noopener noreferrer">
                                    {material.title || '未命名素材'}
                                  </a>
                                ) : (
                                  material.title
                                )}
                              </span>
                            </div>
                            {material.content && material.inputType === 'manual' && (
                              <div className={styles.materialContent}>
                                {material.content}
                              </div>
                            )}
                          </div>
                        </List.Item>
                      )}
                    />
                  </div>
                )}
              </div>
            </Card>
          </List.Item>
        )}
      />

      <Modal
        title="新增选题"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        width={600}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleAdd}
        >
          <Form.Item
            name="title"
            label="选题标题"
            rules={[{ required: true, message: '请输入选题标题' }]}
          >
            <Input placeholder="请输入选题标题" />
          </Form.Item>
          <Form.Item
            name="description"
            label="选题描述"
            rules={[{ required: true, message: '请输入选题描述' }]}
          >
            <TextArea 
              rows={4} 
              placeholder="请详细描述选题内容"
            />
          </Form.Item>
          <Form.Item
            name="points"
            label="输出要点"
            rules={[{ required: true, message: '请输入选题输出要点' }]}
            extra="每行一个要点，建议使用序号标记"
          >
            <TextArea 
              rows={4}
              placeholder="请输入选题需要输出的关键要点&#13;&#10;例如：&#13;&#10;1. 要点一&#13;&#10;2. 要点二"
            />
          </Form.Item>
          <Form.Item className={styles.formFooter}>
            <Button type="primary" htmlType="submit">
              确定
            </Button>
            <Button 
              onClick={() => {
                setIsModalVisible(false);
                form.resetFields();
              }}
              style={{ marginLeft: 8 }}
            >
              取消
            </Button>
          </Form.Item>
        </Form>
      </Modal>


    </div>
  );
};

export default TopicsPage; 