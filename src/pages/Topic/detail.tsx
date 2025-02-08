// @ts-ignore
import { fetchWritingMaterial,createWritingMaterial } from "@/services/writing/writingMaterial";
// @ts-ignore
import { getWritingTopic } from "@/services/writing/writingTopic";


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
import WritingMaterial = API.WritingMaterial;
import WritingTopic = API.WritingTopic;

const { Paragraph, Title, Text } = Typography;
const { TextArea } = Input;
const { TabPane } = Tabs;

const TopicDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState<WritingTopic>();
  const [isMaterialModalVisible, setIsMaterialModalVisible] = useState(false);
  const [materialForm] = Form.useForm();
  const [isUrlFetching, setIsUrlFetching] = useState(false);
  const [activeKey, setActiveKey] = useState('1');
  const [selectedAgent, setSelectedAgent] = useState<string>();
  const [generatedTitle, setGeneratedTitle] = useState<string>();
  const [generatedContent, setGeneratedContent] = useState<string>();

  useEffect(() => {
    getWritingTopic({ id: parseInt(id || '') }).then((res) => {
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
        const materialDto: API.WritingMaterialDto = {
          topicId: parseInt(id || ''),
          flagPrimary: material.type === 'primary' ? 1 : 0,
          title: material.title || '',
          url: material.url || '',
          content: material.content || '',
        };
        await createWritingMaterial(materialDto);
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
      message.error('请输入链接地址');
      return;
    }

    try {
      setIsUrlFetching(true);
      message.loading('正在解析链接...', 0);

      const resp = await fetchWritingMaterial({url});
      materialForm.setFieldsValue({
        title: resp?.data?.title,
        content: resp?.data?.content,
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
      const materialDto: API.WritingMaterialDto = {
        topicId: parseInt(id || ''),
        ...values,
      };
      const resp = await createWritingMaterial(materialDto);

      const newMaterials = [...(editData?.materials || []), resp.data];
      setEditData((prev: WritingTopic | undefined) => ({ ...prev, materials: newMaterials }));

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
          <Input.Group compact>
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
    const removeMaterial = (index: number) => {
      Modal.confirm({
        title: '确认删除',
        content: '确定要删除这个素材吗？',
        okText: '确定',
        cancelText: '取消',
        onOk: () => {
          if (!editData?.materials) return;
          const newMaterials = [...editData.materials];
          newMaterials.splice(index, 1);
          setEditData((prev: WritingTopic | undefined) => prev ? ({ ...prev, materials: newMaterials }) : prev);
          message.success('删除成功');
        },
      });
    };

    return (
      <div className={styles.content}>
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
        message.success(`${type}已复制到剪贴板`);
      })
      .catch(() => {
        message.error('复制失败，请手动复制');
      });
  };

  const renderContentGeneration = () => {
    const agentOptions = [
      { label: '专业写手', value: 'professional' },
      { label: '科技写手', value: 'tech' },
      { label: '文学写手', value: 'literature' },
    ] as const;

    const handleExecute = () => {
      if (!selectedAgent) {
        message.warning('请先选择写手');
        return;
      }

      message.loading({ content: '正在生成内容...', key: 'contentGen' });
      // TODO: 调用后端接口
      setTimeout(() => {
        message.destroy('contentGen');
        setGeneratedTitle('AI 智能写作：让内容创作更高效');
        setGeneratedContent(
          '人工智能技术的快速发展正在改变着内容创作的方式。通过深度学习和自然语言处理技术，AI写手能够理解上下文、把握主题重点，生成符合人类阅读习惯的高质量内容。\n\n不仅如此，AI写手还能够快速处理和整合大量素材，从中提炼出关键信息，大大提高了内容创作的效率。这使得创作者能够将更多精力投入到创意和策略的构思中。\n\n然而，AI写手并非要取代人类写手，而是要成为人类写手的得力助手。通过人机协作，能够实现内容创作的提质增效，为用户带来更好的阅读体验。',
        );
        message.success('内容生成成功');
      }, 1500);
    };

    return (
      <div className={styles.content}>
        <div className={styles.section}>
          <Typography.Title level={5}>写手 Agent</Typography.Title>
          <div className={styles.optionsGroup}>
            <Radio.Group
              value={selectedAgent}
              onChange={(e) => setSelectedAgent(e.target.value)}
            >
              <Space direction="vertical">
                {agentOptions.map((option) => (
                  <Radio key={option.value} value={option.value}>
                    {option.label}
                  </Radio>
                ))}
              </Space>
            </Radio.Group>
          </div>
        </div>

        <div className={styles.section}>
          <Button
            type="primary"
            disabled={!selectedAgent}
            onClick={handleExecute}
          >
            开始生成
          </Button>
        </div>

        {(generatedTitle || generatedContent) && (
          <div className={styles.generatedContent}>
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
      </div>
    );
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
      message.loading({ content: '正在分发...', key: 'distribute' });
      // TODO: 调用后端接口
      setTimeout(() => {
        message.destroy('distribute');
        message.success('分发成功');
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
        >
          <TabPane
            tab={<span style={{ marginRight: 24 }}>选题信息</span>}
            key="1"
          >
            {renderBasicInfo()}
          </TabPane>
          <TabPane
            tab={<span style={{ marginRight: 24 }}>内容素材</span>}
            key="2"
          >
            {renderMaterials()}
          </TabPane>
          <TabPane
            tab={<span style={{ marginRight: 24 }}>内容生产</span>}
            key="3"
          >
            {renderContentGeneration()}
          </TabPane>
          <TabPane tab="渠道分发" key="4">
            {renderChannelDistribution()}
          </TabPane>
        </Tabs>
      </Card>
      {materialModal}
    </div>
  );
};

export default TopicDetail;
