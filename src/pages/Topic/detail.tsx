// @ts-ignore
import { fetchWritingMaterial,createWritingMaterial, deleteWritingMaterial } from "@/services/writing/writingMaterial";
// @ts-ignore
import { generateWritingTopicArticle, getWritingTopic, updateWritingTopic } from '@/services/writing/writingTopic';
// @ts-ignore
import { listAgent } from "@/services/writing/agent";


import {
  CloseOutlined,
  CopyOutlined,
  DeleteOutlined,
  EditOutlined,
  LeftOutlined,
  PlusOutlined,
  SaveOutlined,
} from '@ant-design/icons';
import { history, useParams } from '@umijs/max';
import {
  Button,
  Card,
  Checkbox,
  Form,
  Input,
  message,
  Modal,
  Radio,
  Space,
  Tabs,
  Tag,
  Typography,
} from 'antd';
import React, { useEffect, useState } from 'react';
import styles from './detail.less';

// @ts-ignore
import type { WritingMaterial,  WritingTopic, Agent} from '@/services/writing/typings';
const { Paragraph, Title, Text } = Typography;
const { TextArea } = Input;

const TopicDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState<WritingTopic>();
  const [isMaterialModalVisible, setIsMaterialModalVisible] = useState(false);
  const [materialForm] = Form.useForm();
  const [isUrlFetching, setIsUrlFetching] = useState(false);
  const [activeKey, setActiveKey] = useState('1');
  const [agents, setAgents] = useState<Agent[]>();
  const [selectedAgent, setSelectedAgent] = useState<string>();
  const [generatedTitle, setGeneratedTitle] = useState<string>();
  const [generatedContent, setGeneratedContent] = useState<string>();
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    getWritingTopic({ id: parseInt(id || '') }).then((res) => {
      if (res.success) {
        setEditData(res.data);
      }
    });

    listAgent({}).then((res) => {
      if (res.success) {
        setAgents(res.data);
      }
    });
  }, []);

  const handleSave = async () => {
    if (!editData) return;

    try {
      // Save based on active tab
      switch (activeKey) {
        case '1': // 选题信息 tab
          const topicDto: API.WritingTopicDto = {
            id: editData?.id,
            title: editData?.title,
            description: editData?.description,
            points: editData?.points,
          };
          const{success} = await updateWritingTopic(topicDto);
          if(success){
            messageApi.success('选题信息保存成功');
          }else{
            messageApi.error('选题信息保存失败');
          }
          break;
        
        case '2': // 内容素材 tab
          // Save each material
          for (const material of editData?.materials) {
            const materialDto: API.WritingMaterialDto = {
              topicId: parseInt(id || ''),
              flagPrimary: material.flagPrimary === 1 ? 1 : 0,
              title: material.title || '',
              url: material.url || '',
              content: material.content || '',
            };
            await createWritingMaterial(materialDto);
          }
          messageApi.success('素材保存成功');
          break;

        case '3': // 内容生产 tab
          // TODO: Add API call to save generated content
          messageApi.success('生成内容保存成功');
          break;

        case '4': // 渠道分发 tab
          // TODO: Add API call to save distribution settings
          messageApi.success('渠道设置保存成功');
          break;
      }

      setIsEditing(false);
    } catch (error) {
      messageApi.error('保存失败');
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    // 重新加载数据，放弃修改
    getWritingTopic({ id: parseInt(id || '') }).then((res) => {
      if (res.success) {
        setEditData(res.data);
      }
    });
  };

  // Add new functions for material modal
  const handleUrlFetch = async () => {
    const url = materialForm.getFieldValue('url');
    if (!url) {
      messageApi.error('请输入链接地址');
      return;
    }

    try {
      setIsUrlFetching(true);
      messageApi.loading('正在解析链接...', 0);

      const resp = await fetchWritingMaterial({url});
      materialForm.setFieldsValue({
        title: resp?.data?.title,
        content: resp?.data?.content,
      });
      messageApi.destroy();
      messageApi.success('解析成功');
    } catch (error) {
      messageApi.error('链接解析失败');
    } finally {
      setIsUrlFetching(false);
    }
  };

  const handleAddMaterial = async (values: any) => {
    try {
      const materialDto: API.WritingMaterialDto = {
        topicId: parseInt(id || ''),
        ...values,
      };
      const resp = await createWritingMaterial(materialDto);

      const newMaterials = [...(editData?.materials || []), resp.data];
      setEditData((prev: WritingTopic | undefined) => ({ ...prev, materials: newMaterials }));

      setIsMaterialModalVisible(false);
      materialForm.resetFields();
      messageApi.success('素材添加成功');
    } catch (error) {
      messageApi.error('素材添加失败');
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
      <Form form={materialForm} layout="vertical" onFinish={handleAddMaterial}>
        <Form.Item
          name="flagPrimary"
          label="素材类型"
          rules={[{ required: true, message: '请选择素材类型' }]}
        >
          <Radio.Group>
            <Radio value={1}>主要素材</Radio>
            <Radio value={0}>辅助素材</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="url" label="链接地址">
          <Space.Compact style={{ width: '100%' }}>
            <Form.Item name="url" noStyle>
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
          </Space.Compact>
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
          <TextArea rows={30} placeholder="请输入素材内容" />
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
              setEditData((prev: WritingTopic | undefined) => ({ ...prev, title: e.target.value }))
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
              setEditData((prev: WritingTopic | undefined) => ({ ...prev, description: e.target.value }))
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
              setEditData((prev: WritingTopic | undefined) => ({ ...prev, points: e.target.value }))
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
    // Don't show action bar if there are no materials
    const showActionBar = editData?.materials && editData.materials.length > 0;

    const removeMaterial = (index: number) => {
      Modal.confirm({
        title: '确认删除',
        content: '确定要删除这个素材吗？',
        okText: '确定',
        cancelText: '取消',
        onOk: async () => {
          if (!editData?.materials) return;
          const material = editData.materials[index];
          
          try {
            // Call delete API
            if (material.id) {
              const { success } = await deleteWritingMaterial(material);
              if (!success) {
                messageApi.error('删除失败');
                return;
              }
            }

            // Update local state after successful API call
            const newMaterials = [...editData.materials];
            newMaterials.splice(index, 1);
            setEditData((prev: WritingTopic | undefined) => 
              prev ? ({ ...prev, materials: newMaterials }) : prev
            );
            messageApi.success('删除成功');
          } catch (error) {
            messageApi.error('删除失败');
          }
        },
      });
    };

    const handleExecute = () => {
      if (!selectedAgent) {
        messageApi.warning('请先选择写手');
        return;
      }

      messageApi.loading({ content: '正在生成内容...', key: 'contentGen' });
      generateWritingTopicArticle({ id: parseInt(id || ''), agentId: selectedAgent }).then((resp) => {
        messageApi.destroy('contentGen');
        if (resp.success) {
          setGeneratedTitle(resp.data?.articleTitle);
          setGeneratedContent(resp.data?.articleContent);
          messageApi.success('内容生成成功');
        } else {
          messageApi.error('内容生成失败');
        }
      });
    };

    return (
      <div className={styles.content}>
        {showActionBar && (
          <div className={styles.actionBar} style={{ 
            marginBottom: 16,
            padding: '16px 24px',
            background: '#f5f5f5',
            borderRadius: '8px',
            border: '1px solid #e8e8e8'
          }}>
            <Space direction="vertical" style={{ width: '100%' }}>
              <Typography.Text strong>AI 智能写作</Typography.Text>
           
                <Radio.Group
                  value={selectedAgent}
                  onChange={(e) => setSelectedAgent(e.target.value)}
                >
                  <Space>
                    {agents?.map((agent) => (
                      <Radio key={agent.id} value={agent.id}>
                        {agent.agentName}
                      </Radio>
                    ))}
                  </Space>
                </Radio.Group>
                <Button
                  type="primary"
                  disabled={!selectedAgent}
                  onClick={handleExecute}
                >
                  开始生成
                </Button>
            </Space>
          </div>
        )}

        {(generatedTitle || generatedContent) && (
          <div className={styles.generatedContent} style={{ marginBottom: 16 }}>
            {generatedTitle && (
              <div className={styles.section}>
                <div className={styles.sectionHeader}>
                  <Typography.Title level={5}>生成的标题</Typography.Title>
                  <Button
                    type="link"
                    icon={<CopyOutlined />}
                    onClick={() => handleCopy(generatedTitle, '标题')}
                  >
                    复制
                  </Button>
                </div>
                <div className={styles.contentBox}>{generatedTitle}</div>
              </div>
            )}

            {generatedContent && (
              <div className={styles.section}>
                <div className={styles.sectionHeader}>
                  <Typography.Title level={5}>生成的内容</Typography.Title>
                  <Button
                    type="link"
                    icon={<CopyOutlined />}
                    onClick={() => handleCopy(generatedContent, '内容')}
                  >
                    复制
                  </Button>
                </div>
                <div className={styles.contentBox}>
                  <pre style={{ whiteSpace: 'pre-wrap', margin: 0 }}>
                    {generatedContent}
                  </pre>
                </div>
              </div>
            )}
          </div>
        )}

        <Tabs
          type="card"
          items={editData?.materials?.map((material:WritingMaterial, index:number) => ({
            label: (
              <span
                style={{
                  padding: '2px 4px',
                  color: '#fff',
                  backgroundColor:
                    material.flagPrimary === 1 ? '#3333cc' : '#999',
                }}
              >
                素材{index + 1} ({material.flagPrimary === 1 ? '主' : '辅'})
                <DeleteOutlined
                  className={styles.deleteIcon}
                  onClick={(e) => {
                    e.stopPropagation();
                    removeMaterial(index);
                  }}
                />
              </span>
            ),
            key: String(material.id || index),
            children: (
              <div className={styles.materialContent}>
                <div className={styles.materialItem}>
                  <div className={styles.label}>
                    <Text type="secondary">素材类型</Text>
                  </div>
                  <div className={styles.value}>
                    {isEditing ? (
                      <Radio.Group
                        value={material.flagPrimary === 1 ? 'primary' : 'secondary'}
                        onChange={(e) => {
                          if (!editData?.materials) return;
                          const newMaterials = [...editData.materials];
                          newMaterials[index] = {
                            ...material,
                            flagPrimary: e.target.value === 'primary' ? 1 : 0,
                          };
                          setEditData((prev: WritingTopic | undefined) => prev ? ({
                            ...prev,
                            materials: newMaterials,
                          }) : prev);
                        }}
                      >
                        <Radio value="primary">主要素材</Radio>
                        <Radio value="secondary">辅助素材</Radio>
                      </Radio.Group>
                    ) : (
                      <Tag color={material.flagPrimary === 1 ? 'blue' : 'green'}>
                        {material.flagPrimary === 1 ? '主要素材' : '辅助素材'}
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
                          if (!editData?.materials) return;
                          const newMaterials = [...editData.materials];
                          newMaterials[index] = {
                            ...material,
                            title: e.target.value,
                          };
                          setEditData((prev: WritingTopic | undefined) => prev ? ({
                            ...prev,
                            materials: newMaterials,
                          }) : prev);
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
                          if (!editData?.materials) return;
                          const newMaterials = [...editData.materials];
                          newMaterials[index] = {
                            ...material,
                            url: e.target.value,
                          };
                          setEditData((prev: WritingTopic | undefined) => prev ? ({
                            ...prev,
                            materials: newMaterials,
                          }) : prev);
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
                        rows={30}
                        value={material.content}
                        onChange={(e) => {
                          if (!editData?.materials) return;
                          const newMaterials = [...editData.materials];
                          newMaterials[index] = {
                            ...material,
                            content: e.target.value,
                          };
                          setEditData((prev: WritingTopic | undefined) => prev ? ({
                            ...prev,
                            materials: newMaterials,
                          }) : prev);
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

  // 内容生产 Tab
  const handleCopy = (text: string, type: '标题' | '内容') => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        messageApi.success(`${type}已复制到剪贴板`);
      })
      .catch(() => {
        messageApi.error('复制失败，请手动复制');
      });
  };

  // 新增渠道分发 Tab
  const renderChannelDistribution = () => {
    const channelOptions = [
      { label: '微信公众号', value: 'wechat' },
      { label: '知乎', value: 'zhihu' },
      { label: '头条号', value: 'toutiao' },
      { label: '企业官网', value: 'website' },
    ] as const;

    const handleDistribute = (channel: string) => {
      messageApi.loading({ content: '正在分发...', key: 'distribute' });
      // TODO: 调用后端接口
      setTimeout(() => {
        messageApi.destroy('distribute');
        messageApi.success('分发成功');
      }, 1500);
    };

    return (
      <div className={styles.content}>
        <div className={styles.section}>
          <Typography.Title level={5}>渠道选择</Typography.Title>
          <div className={styles.optionsGroup}>
            <Checkbox.Group>
              <Space direction="vertical">
                {channelOptions.map((option) => (
                  <Checkbox key={option.value} value={option.value}>
                    {option.label}
                    <Button
                      type="primary"
                      size="small"
                      onClick={(e) => {
                        e.preventDefault();
                        handleDistribute(option.value);
                      }}
                      style={{ marginLeft: 8 }}
                    >
                      分发
                    </Button>
                  </Checkbox>
                ))}
              </Space>
            </Checkbox.Group>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.topicDetail}>
      {contextHolder}
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
            activeKey === '1' ? (
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
            ) : activeKey === '2' ? (
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
          items={[
            {
              key: "1",
              label: <span style={{ marginRight: 24 }}>选题信息</span>,
              children: renderBasicInfo()
            },
            {
              key: "2", 
              label: <span style={{ marginRight: 24 }}>内容素材</span>,
              children: renderMaterials()
            },
            {
              key: "4",
              label: "渠道分发",
              children: renderChannelDistribution()
            }
          ]}
        />
      </Card>
      {materialModal}
    </div>
  );
};

export default TopicDetail;
