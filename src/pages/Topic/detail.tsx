import { getMaterial, addMaterial, fetchUrl } from '@/services/demo/MaterialController';
import type { Topic } from '@/services/demo/typings';
import {
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  LeftOutlined,
  PlusOutlined,
  SaveOutlined,
} from '@ant-design/icons';
import { Button, Card, Input, Radio, Space, Tabs, Tag, Typography, message, Modal, Form } from 'antd';
import React, { useEffect, useState } from 'react';
import { history, useParams } from 'umi';
import styles from './detail.less';
import { getTopic } from '@/services/demo/TopicController';

const { Paragraph, Title, Text } = Typography;
const { TextArea } = Input;
const { TabPane } = Tabs;

const TopicDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState<Topic>();
  const [isMaterialModalVisible, setIsMaterialModalVisible] = useState(false);
  const [materialForm] = Form.useForm();
  const [isUrlFetching, setIsUrlFetching] = useState(false);
  const [activeKey, setActiveKey] = useState("1");

  useEffect(() => {
    getTopic({ id: parseInt(id || '') }).then((res) => {
      if (res.success) {
        setEditData(res.data);
      }
    });
  }, []);

  const handleSave = async () => {
    if (!editData) return;
    
    try {
      // 保存每个素材
      for (const material of editData.materials) {
        await addMaterial({
          topic_id: parseInt(id || ''),
          flag_primary: material.type === 'primary' ? '1' : '0',
          title: material.title || '',
          url: material.url || '',
          content: material.content || '',
        });
      }
      
      message.success('保存成功');
      setIsEditing(false);
    } catch (error) {
      message.error('保存失败');
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    // 重新加载数据，放弃修改
    getTopic({ id: parseInt(id || '') }).then((res) => {
      if (res.success) {
        setEditData(res.data);
      }
    });
  };

  // Add new functions for material modal
  const handleUrlFetch = async () => {
    const url = materialForm.getFieldValue('url');
    if (!url) {
      message.error('请输入链接地址');
      return;
    }

    try {
      setIsUrlFetching(true);
      message.loading('正在解析链接...', 0);

      const resp = await fetchUrl({ url });
      materialForm.setFieldsValue({
        title: resp?.data?.title,
        content: resp?.data?.content
      });
      message.destroy();
      message.success('解析成功');
    } catch (error) {
      message.error('链接解析失败');
    } finally {
      setIsUrlFetching(false);
    }
  };

  const handleAddMaterial = async (values: any) => {
    try {
      // 先调用接口保存素材
      const resp = await addMaterial({
        topic_id: parseInt(id || ''),
        ...values
      });

      const newMaterials = [...(editData?.materials || []), resp.data];
      setEditData((prev) => ({ ...prev, materials: newMaterials }));
      
      // 关闭弹窗并重置表单
      setIsMaterialModalVisible(false);
      materialForm.resetFields();
      message.success('素材添加成功');
    } catch (error) {
      message.error('素材添加失败');
    }
  };

  // Modify the addNewMaterial function
  const addNewMaterial = () => {
    setIsMaterialModalVisible(true);
  };

  // Add material modal JSX
  const materialModal = (
    <Modal
      title="添加素材"
      open={isMaterialModalVisible}
      onCancel={() => {
        setIsMaterialModalVisible(false);
        materialForm.resetFields();
      }}
      footer={null}
      width={900}
    >
      <Form
        form={materialForm}
        layout="vertical"
        onFinish={handleAddMaterial}
      >
        <Form.Item
          name="flag_primary"
          label="素材类型"
          rules={[{ required: true, message: '请选择素材类型' }]}
        >
          <Radio.Group>
            <Radio value="1">主要素材</Radio>
            <Radio value="0">辅助素材</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="url"
          label="链接地址"
        >
          <Input.Group compact>
            <Form.Item
              name="url"
              noStyle
            >
              <Input 
                style={{ width: 'calc(100% - 88px)' }} 
                placeholder="输入链接后点击提取" 
              />
            </Form.Item>
            <Button 
              type="primary"
              onClick={handleUrlFetch}
              loading={isUrlFetching}
              style={{ width: '88px' }}
            >
              提取
            </Button>
          </Input.Group>
        </Form.Item>

        <Form.Item
          name="title"
          label="素材标题"
          rules={[{ required: true, message: '请输入素材标题' }]}
        >
          <Input placeholder="请输入素材标题" />
        </Form.Item>

        <Form.Item
          name="content"
          label="素材内容"
          rules={[{ required: true, message: '请输入素材内容' }]}
        >
          <TextArea 
            rows={4} 
            placeholder="请输入素材内容" 
          />
        </Form.Item>

        <Form.Item className={styles.formFooter}>
          <Button type="primary" htmlType="submit">
            确定
          </Button>
          <Button 
            onClick={() => {
              setIsMaterialModalVisible(false);
              materialForm.resetFields();
            }}
            style={{ marginLeft: 8 }}
          >
            取消
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );

  // 选题信息 Tab
  const renderBasicInfo = () => (
    <div className={styles.content}>
      <div className={styles.section}>
        <Text type="secondary">选题编号</Text>
        <Title level={4}>{editData?.id}</Title>
      </div>

      <div className={styles.section}>
        <Text type="secondary">选题名称</Text>
        {isEditing ? (
          <Input
            value={editData?.title}
            onChange={(e) =>
              setEditData((prev) => ({ ...prev, title: e.target.value }))
            }
          />
        ) : (
          <Title level={4}>{editData?.title}</Title>
        )}
      </div>

      <div className={styles.section}>
        <Text type="secondary">选题描述</Text>
        {isEditing ? (
          <TextArea
            rows={4}
            value={editData?.description}
            onChange={(e) =>
              setEditData((prev) => ({ ...prev, description: e.target.value }))
            }
          />
        ) : (
          <Paragraph>{editData?.description}</Paragraph>
        )}
      </div>

      <div className={styles.section}>
        <Text type="secondary">选题要点</Text>
        {isEditing ? (
          <TextArea
            rows={4}
            value={editData?.points}
            onChange={(e) =>
              setEditData((prev) => ({ ...prev, points: e.target.value }))
            }
          />
        ) : (
          <Paragraph>
            <pre style={{ whiteSpace: 'pre-wrap', margin: 0 }}>
              {editData?.points}
            </pre>
          </Paragraph>
        )}
      </div>
    </div>
  );

  // 内容素材 Tab
  const renderMaterials = () => {
    const removeMaterial = (index: number) => {
      Modal.confirm({
        title: '确认删除',
        content: '确定要删除这个素材吗？',
        okText: '确定',
        cancelText: '取消',
        onOk: () => {
          const newMaterials = [...editData?.materials];
          newMaterials.splice(index, 1);
          setEditData((prev) => ({ ...prev, materials: newMaterials }));
          message.success('删除成功');
        }
      });
    };

    return (
      <div className={styles.content}>
        <Tabs
          type="card"
          items={editData?.materials.map((material, index) => ({
            label: (
              <span style={{ padding: '2px 4px', color: '#fff', backgroundColor: material.flag_primary === 1 ? '#3333cc' : '#999' }}>
                素材{index + 1} ({material.flag_primary === 1 ? '主' : '辅'} )
                <DeleteOutlined
                  className={styles.deleteIcon}
                  onClick={(e) => {
                    e.stopPropagation();
                    removeMaterial(index);
                  }}
                />
              </span>
            ),
            key: String(material.id),
            children: (
              <div className={styles.materialContent}>
                <div className={styles.materialItem}>
                  <div className={styles.label}>
                    <Text type="secondary">素材类型</Text>
                  </div>
                  <div className={styles.value}>
                    {isEditing ? (
                      <Radio.Group
                        value={material.type}
                        onChange={(e) => {
                          const newMaterials = [...editData?.materials];
                          newMaterials[index] = {
                            ...material,
                            type: e.target.value,
                          };
                          setEditData((prev) => ({
                            ...prev,
                            materials: newMaterials,
                          }));
                        }}
                      >
                        <Radio value="primary">主要素材</Radio>
                        <Radio value="secondary">辅助素材</Radio>
                      </Radio.Group>
                    ) : (
                      <Tag
                        color={material.type === 'primary' ? 'blue' : 'green'}
                      >
                        {material.type === 'primary' ? '主要素材' : '辅助素材'}
                      </Tag>
                    )}
                  </div>
                </div>

                <div className={styles.materialItem}>
                  <div className={styles.label}>
                    <Text type="secondary">素材标题</Text>
                  </div>
                  <div className={styles.value}>
                    {isEditing ? (
                      <Input
                        value={material.title}
                        onChange={(e) => {
                          const newMaterials = [...editData?.materials];
                          newMaterials[index] = {
                            ...material,
                            title: e.target.value,
                          };
                          setEditData((prev) => ({
                            ...prev,
                            materials: newMaterials,
                          }));
                        }}
                      />
                    ) : (
                      <Title level={5}>{material.title}</Title>
                    )}
                  </div>
                </div>

                <div className={styles.materialItem}>
                  <div className={styles.label}>
                    <Text type="secondary">素材链接</Text>
                  </div>
                  <div className={styles.value}>
                    {isEditing ? (
                      <Input
                        value={material.url}
                        onChange={(e) => {
                          const newMaterials = [...editData?.materials];
                          newMaterials[index] = {
                            ...material,
                            url: e.target.value,
                          };
                          setEditData((prev) => ({
                            ...prev,
                            materials: newMaterials,
                          }));
                        }}
                      />
                    ) : (
                      <a
                        href={material.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {material.url}
                      </a>
                    )}
                  </div>
                </div>

                <div className={styles.materialItem}>
                  <div className={styles.label}>
                    <Text type="secondary">素材内容</Text>
                  </div>
                  <div className={styles.value}>
                    {isEditing ? (
                      <TextArea
                        rows={4}
                        value={material.content}
                        onChange={(e) => {
                          const newMaterials = [...editData?.materials];
                          newMaterials[index] = {
                            ...material,
                            content: e.target.value,
                          };
                          setEditData((prev) => ({
                            ...prev,
                            materials: newMaterials,
                          }));
                        }}
                      />
                    ) : (
                      <Paragraph>
                        <pre style={{ whiteSpace: 'pre-wrap', margin: 0 }}>
                          {material.content}
                        </pre>
                      </Paragraph>
                    )}
                  </div>
                </div>
              </div>
            ),
          }))}
        />
      </div>
    );
  };

  // 输出设置 Tab - 现在是空的，可以根据需要添加其他设置
  const renderOutputSettings = () => (
    <div className={styles.content}>{/* 可以根据需要添加其他输出设置 */}</div>
  );

  return (
    <div className={styles.topicDetail}>
      <div className={styles.header}>
        <Button
          type="link"
          icon={<LeftOutlined />}
          onClick={() => history.push('/topic')}
        >
          返回选题管理
        </Button>
      </div>

      <Card>
        <Tabs 
          defaultActiveKey="1"
          tabBarExtraContent={
            activeKey === "1" ? (
              !isEditing ? (
                <Button
                  type="primary"
                  icon={<EditOutlined />}
                  onClick={() => setIsEditing(true)}
                >
                  编辑
                </Button>
              ) : (
                <>
                  <Button
                    type="primary"
                    icon={<SaveOutlined />}
                    onClick={handleSave}
                  >
                    保存
                  </Button>
                  <Button 
                    icon={<CloseOutlined />} 
                    onClick={handleCancel}
                    style={{ marginLeft: 8 }}
                  >
                    取消
                  </Button>
                </>
              )
            ) : activeKey === "2" ? (
              <Button
                type="primary"
                icon={<PlusOutlined />}
                onClick={addNewMaterial}
              >
                添加素材
              </Button>
            ) : null
          }
          onChange={(key) => setActiveKey(key)}
        >
          <TabPane 
            tab={
              <span style={{ marginRight: 24 }}>选题信息</span>
            }
            key="1"
          >
            {renderBasicInfo()}
          </TabPane>
          <TabPane 
            tab={
              <span style={{ marginRight: 24 }}>内容素材</span>
            }
            key="2"
          >
            {renderMaterials()}
          </TabPane>
          <TabPane tab="输出设置" key="3">
            {renderOutputSettings()}
          </TabPane>
        </Tabs>
      </Card>
      {materialModal}
    </div>
  );
};

export default TopicDetail;