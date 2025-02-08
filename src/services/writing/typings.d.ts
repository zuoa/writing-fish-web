declare namespace API {
  type activeOrgRoleUsingPOSTParams = {
    creationTime?: number;
    id?: string;
    lastAccessedTime?: number;
    maxInactiveInterval?: number;
    new?: boolean;
    valueNames?: string[];
  };

  type Agent = {
    /** Llm 模型 ID */
    agentModelId?: number;
    /** Agent 名称 */
    agentName?: string;
    /** Agent 提示词 */
    agentPrompt?: string;
    /** Agent 类型 */
    agentType?: string;
    createAt?: string;
    id?: number;
    updateAt?: string;
  };

  type AgentDto = {
    /** Llm 模型 ID */
    agentModelId?: number;
    /** Agent 名称 */
    agentName?: string;
    /** Agent 提示词 */
    agentPrompt?: string;
    /** Agent 类型 */
    agentType?: string;
    createAt?: string;
    id?: number;
    updateAt?: string;
  };

  type AgentListPageQuery = {
    keyword?: string;
    pageNo?: number;
    pageSize?: number;
  };

  type Config = {
    /** 创建时间 */
    createTime?: string;
    id?: number;
    /** k键 */
    k?: string;
    /** 大类 */
    largeCategory?: string;
    /** 参数名称 */
    name?: string;
    /** 排序 */
    orderby?: number;
    /** 小类 */
    subclass?: string;
    /** 更新时间 */
    updateTime?: string;
    /** v值 */
    v?: string;
  };

  type CpuInfo = {
    cpuModel?: string;
    cpuNum?: number;
    free?: number;
    sys?: number;
    ticks?: CpuTicks;
    toTal?: number;
    used?: number;
    user?: number;
    wait?: number;
  };

  type CpuTicks = {
    cSys?: number;
    idle?: number;
    ioWait?: number;
    irq?: number;
    nice?: number;
    softIrq?: number;
    steal?: number;
    user?: number;
  };

  type delOrgUsingPOST1Params = {
    /** id */
    id: number;
  };

  type delOrgUsingPOSTParams = {
    /** oid */
    oid: number;
  };

  type delRoleUsingPOSTParams = {
    /** id */
    id: number;
  };

  type detailsUsingPOSTParams = {
    /** 标签id */
    tagId: number;
  };

  type detailUsingPOSTParams = {
    /** id */
    id: number;
  };

  type DirectoryFile = {
    /** 所在磁盘剩余大小 */
    free?: string;
    /** 所在磁盘总大小 */
    total?: string;
    /** 当前目录的使用率 */
    usage?: number;
    /** 当前目录的使用量 */
    used?: string;
  };

  type fileUsingGETParams = {
    /** bucket */
    bucket: string;
    /** fileName */
    fileName: string;
  };

  type findAllUsingPOST1Params = {
    /** keyword */
    keyword?: string;
    /** page */
    page?: number;
    /** 父级id */
    pid: number;
    /** size */
    size?: number;
  };

  type findAllUsingPOST2Params = {
    /** 关键字(dictType,description) */
    keyword?: string;
    /** page */
    page?: number;
    /** size */
    size?: number;
    /** systemFlag */
    systemFlag?: number;
  };

  type findAllUsingPOST3Params = {
    /** 关键字 */
    keyword?: string;
    /** page */
    page?: number;
    /** size */
    size?: number;
    /** 来源：0文件上传模块，1其他模块 */
    source?: number;
  };

  type findAllUsingPOST4Params = {
    /** 菜单类型(多个逗号隔开) */
    category?: string;
    /** ignoreApi */
    ignoreApi?: boolean;
    /** name */
    name?: string;
    /** page */
    page?: number;
    /** pathName */
    pathName?: string;
    /** size */
    size?: number;
    /** type */
    type?: number;
  };

  type findAllUsingPOST5Params = {
    /** keyword */
    keyword?: string;
    /** page */
    page?: number;
    /** size */
    size?: number;
    /** type */
    type?: number;
  };

  type findAllUsingPOST6Params = {
    /** page */
    page?: number;
    /** 角色id */
    roleId?: number;
    /** size */
    size?: number;
  };

  type findAllUsingPOST7Params = {
    /** 标签所属模块：字典项表中的item_value */
    dictItemValue?: string;
    /** page */
    page?: number;
    /** 标签父id */
    parentId?: number;
    /** size */
    size?: number;
    /** 标签名称 */
    tagName?: string;
  };

  type findAllUsingPOST8Params = {
    /** 应用code */
    appCode?: string;
    /** 是否绑定zzdId：0否，1是 */
    flagBindZzd?: number;
    /** 是否禁用flagForbidden：0否，1是 */
    flagForbidden?: number;
    /** keyword */
    keyword?: string;
    /** oid */
    oid?: number;
    /** page */
    page?: number;
    /** roleId */
    roleId?: number;
    /** size */
    size?: number;
  };

  type findAllUsingPOST9Params = {
    /** beginTime */
    beginTime?: string;
    /** endTime */
    endTime?: string;
    /** keyword */
    keyword?: string;
    /** page */
    page?: number;
    /** size */
    size?: number;
  };

  type findAllUsingPOSTParams = {
    /** isAll */
    isAll?: boolean;
    /** 是否忽略wkt */
    isIgnoreWkt?: boolean;
    /** keyword */
    keyword?: string;
    /** 最大level */
    maxLevel?: number;
    /** 组织属性id */
    orgPropertyId?: number;
    /** page */
    page?: number;
    /** root */
    root?: string;
    /** size */
    size?: number;
    /** 是否查询子组织 */
    subQuery?: boolean;
    /** type */
    type?: string;
  };

  type getByUidUsingPOST1Params = {
    /** loginName */
    loginName: string;
  };

  type getByUidUsingPOSTParams = {
    /** uid */
    uid: number;
  };

  type getConfigByKUsingPOSTParams = {
    /** 关键字k */
    k: string;
  };

  type getListByDictIdUsingPOSTParams = {
    /** dictId */
    dictId?: number;
    /** dictType */
    dictType?: string;
    /** itemValue */
    itemValue?: string;
    /** label */
    label?: string;
    /** page */
    page?: number;
    /** size */
    size?: number;
  };

  type getListByKeysUsingPOSTParams = {
    /** keys */
    keys: string;
    /** sign */
    sign: string;
    /** timestamp */
    timestamp: number;
  };

  type getListByUidUsingPOSTParams = {
    /** page */
    page?: number;
    /** size */
    size?: number;
    /** type */
    type: number;
  };

  type getNoticeUserListUsingPOSTParams = {
    /** 主键id */
    id: number;
    /** 关键字 */
    keyword?: string;
    /** page */
    page?: number;
    /** size */
    size?: number;
  };

  type getOrgUsingPOSTParams = {
    /** oid */
    oid: number;
  };

  type getPersonsUsingPOSTParams = {
    /** 开始时间 */
    beginTime?: string;
    /** 结束时间 */
    endTime?: string;
    /** 关键字（内容） */
    keyword?: string;
    /** page */
    page?: number;
    /** size */
    size?: number;
    /** 类型 */
    type?: string;
  };

  type getTreeUsingPOSTParams = {
    /** root */
    root?: number;
  };

  type getUserMenuListUsingPOSTParams = {
    /** 菜单类型(多个逗号隔开) */
    category?: string;
    /** name */
    name?: string;
    /** pathName */
    pathName?: string;
    /** type */
    type?: number;
  };

  type getVerificationCodeUsingPOSTParams = {
    /** mobile */
    mobile: string;
  };

  type Jvm = {
    /** JVM空闲内存(M) */
    free?: number;
    /** JDK路径 */
    home?: string;
    /** JVM最大可用内存总数(M) */
    max?: number;
    name?: string;
    runTime?: string;
    startTime?: string;
    /** 当前JVM占用的内存总数(M) */
    total?: number;
    usage?: number;
    used?: number;
    /** JDK版本 */
    version?: string;
  };

  type ListResponseEntityAgent_ = {
    list?: Agent[];
    page?: number;
    size?: number;
    total?: number;
  };

  type ListResponseEntityLinkedHashMapStringObject_ = {
    list?: Record<string, any>[];
    page?: number;
    size?: number;
    total?: number;
  };

  type ListResponseEntityLlm_ = {
    list?: Llm[];
    page?: number;
    size?: number;
    total?: number;
  };

  type ListResponseEntityOrgProperty_ = {
    list?: OrgProperty[];
    page?: number;
    size?: number;
    total?: number;
  };

  type ListResponseEntityOrgVO_ = {
    list?: OrgVO[];
    page?: number;
    size?: number;
    total?: number;
  };

  type ListResponseEntitySysDictItem_ = {
    list?: SysDictItem[];
    page?: number;
    size?: number;
    total?: number;
  };

  type ListResponseEntitySysDictVO_ = {
    list?: SysDictVO[];
    page?: number;
    size?: number;
    total?: number;
  };

  type ListResponseEntitySysFile_ = {
    list?: SysFile[];
    page?: number;
    size?: number;
    total?: number;
  };

  type ListResponseEntitySysLog_ = {
    list?: SysLog[];
    page?: number;
    size?: number;
    total?: number;
  };

  type ListResponseEntitySysMenu_ = {
    list?: SysMenu[];
    page?: number;
    size?: number;
    total?: number;
  };

  type ListResponseEntitySysNoticeVO_ = {
    list?: SysNoticeVO[];
    page?: number;
    size?: number;
    total?: number;
  };

  type ListResponseEntitySysRole_ = {
    list?: SysRole[];
    page?: number;
    size?: number;
    total?: number;
  };

  type ListResponseEntitySysRoleVO_ = {
    list?: SysRoleVO[];
    page?: number;
    size?: number;
    total?: number;
  };

  type ListResponseEntitySysTag_ = {
    list?: SysTag[];
    page?: number;
    size?: number;
    total?: number;
  };

  type ListResponseEntitySysUserVO_ = {
    list?: SysUserVO[];
    page?: number;
    size?: number;
    total?: number;
  };

  type ListResponseEntitySysWarning_ = {
    list?: SysWarning[];
    page?: number;
    size?: number;
    total?: number;
  };

  type ListResponseEntityWritingMaterial_ = {
    list?: WritingMaterial[];
    page?: number;
    size?: number;
    total?: number;
  };

  type ListResponseEntityWritingTopic_ = {
    list?: WritingTopic[];
    page?: number;
    size?: number;
    total?: number;
  };

  type listStatementUsingPOSTParams = {
    /** filter */
    filter?: string;
    /** page */
    page?: number;
    /** password */
    password?: string;
    /** size */
    size?: number;
    /** statementCode */
    statementCode: string;
  };

  type Llm = {
    createAt?: string;
    httpProxy?: string;
    id?: number;
    modelAlias?: string;
    modelApiKey?: string;
    modelBaseUrl?: string;
    modelName?: string;
    updateAt?: string;
  };

  type LlmDto = {
    createAt?: string;
    httpProxy?: string;
    id?: number;
    modelAlias?: string;
    modelApiKey?: string;
    modelBaseUrl?: string;
    modelName?: string;
    testPrompt?: string;
    updateAt?: string;
  };

  type LlmListPageQuery = {
    keyword?: string;
    pageNo?: number;
    pageSize?: number;
  };

  type loginByMobileUsingPOSTParams = {
    /** code */
    code: string;
    /** mobile */
    mobile: string;
  };

  type loginPasswordFreeByMobileUsingPOSTParams = {
    /** mobile */
    mobile: string;
  };

  type loginSignatureUsingPOSTParams = {
    /** loginName */
    loginName: string;
    /** signature */
    signature: string;
    /** ts */
    ts: number;
  };

  type loginUsingPOSTParams = {
    /** loginName */
    loginName: string;
    /** password */
    password: string;
  };

  type markAllReadUsingPOSTParams = {
    /** type */
    type: number;
  };

  type Mem = {
    /** 剩余内存 */
    free?: number;
    /** 内存总量 */
    total?: number;
    usage?: number;
    /** 已用内存 */
    used?: number;
  };

  type ModelAndView = {
    empty?: boolean;
    model?: Record<string, any>;
    modelMap?: Record<string, any>;
    reference?: boolean;
    status?:
      | 'ACCEPTED'
      | 'ALREADY_REPORTED'
      | 'BAD_GATEWAY'
      | 'BAD_REQUEST'
      | 'BANDWIDTH_LIMIT_EXCEEDED'
      | 'CHECKPOINT'
      | 'CONFLICT'
      | 'CONTINUE'
      | 'CREATED'
      | 'DESTINATION_LOCKED'
      | 'EXPECTATION_FAILED'
      | 'FAILED_DEPENDENCY'
      | 'FORBIDDEN'
      | 'FOUND'
      | 'GATEWAY_TIMEOUT'
      | 'GONE'
      | 'HTTP_VERSION_NOT_SUPPORTED'
      | 'IM_USED'
      | 'INSUFFICIENT_SPACE_ON_RESOURCE'
      | 'INSUFFICIENT_STORAGE'
      | 'INTERNAL_SERVER_ERROR'
      | 'I_AM_A_TEAPOT'
      | 'LENGTH_REQUIRED'
      | 'LOCKED'
      | 'LOOP_DETECTED'
      | 'METHOD_FAILURE'
      | 'METHOD_NOT_ALLOWED'
      | 'MOVED_PERMANENTLY'
      | 'MOVED_TEMPORARILY'
      | 'MULTIPLE_CHOICES'
      | 'MULTI_STATUS'
      | 'NETWORK_AUTHENTICATION_REQUIRED'
      | 'NON_AUTHORITATIVE_INFORMATION'
      | 'NOT_ACCEPTABLE'
      | 'NOT_EXTENDED'
      | 'NOT_FOUND'
      | 'NOT_IMPLEMENTED'
      | 'NOT_MODIFIED'
      | 'NO_CONTENT'
      | 'OK'
      | 'PARTIAL_CONTENT'
      | 'PAYLOAD_TOO_LARGE'
      | 'PAYMENT_REQUIRED'
      | 'PERMANENT_REDIRECT'
      | 'PRECONDITION_FAILED'
      | 'PRECONDITION_REQUIRED'
      | 'PROCESSING'
      | 'PROXY_AUTHENTICATION_REQUIRED'
      | 'REQUESTED_RANGE_NOT_SATISFIABLE'
      | 'REQUEST_ENTITY_TOO_LARGE'
      | 'REQUEST_HEADER_FIELDS_TOO_LARGE'
      | 'REQUEST_TIMEOUT'
      | 'REQUEST_URI_TOO_LONG'
      | 'RESET_CONTENT'
      | 'SEE_OTHER'
      | 'SERVICE_UNAVAILABLE'
      | 'SWITCHING_PROTOCOLS'
      | 'TEMPORARY_REDIRECT'
      | 'TOO_EARLY'
      | 'TOO_MANY_REQUESTS'
      | 'UNAUTHORIZED'
      | 'UNAVAILABLE_FOR_LEGAL_REASONS'
      | 'UNPROCESSABLE_ENTITY'
      | 'UNSUPPORTED_MEDIA_TYPE'
      | 'UPGRADE_REQUIRED'
      | 'URI_TOO_LONG'
      | 'USE_PROXY'
      | 'VARIANT_ALSO_NEGOTIATES';
    view?: View;
    viewName?: string;
  };

  type Org = {
    /** 创建时间 */
    createTime?: string;
    /** 删除标记,1:已删除,0:正常 */
    delFlag?: number;
    /** 逻辑删除辅助字段 */
    delKey?: number;
    /** 行政区划编码 */
    districtCode?: string;
    /** 部门所属的行政区划OID */
    districtOid?: number;
    /** 组织全称 */
    fullname?: string;
    /** 组织等级 */
    level?: number;
    name?: string;
    oid?: number;
    /** oid路径 */
    oidPath?: string;
    /** 排序字段 */
    orderby?: number;
    /** 组织属性id */
    orgPropertyId?: number;
    /** 组织名称路径 */
    path?: string;
    /** 父组织OID */
    poid?: number;
    /** 第三方数据编码 */
    refCode?: string;
    /** 第三方数据ID */
    refOid?: string;
    /** 备注 */
    remark?: string;
    /** 组织类型 */
    type?: number;
    /** 更新时间 */
    updateTime?: string;
    /** wkt边界数据 */
    wkt?: string;
    /** 专有钉钉部门code */
    zzdOrgCode?: string;
  };

  type OrgProperty = {
    /** 编码长度 */
    codeLength?: number;
    /** 创建时间 */
    createTime?: string;
    /** 删除标记,1:已删除,0:正常 */
    delFlag?: number;
    /** 逻辑删除辅助字段 */
    delKey?: number;
    /** 图标 */
    icon?: string;
    id?: number;
    /** 属性名称 */
    name?: string;
    /** 上级id */
    pid?: number;
    /** 更新时间 */
    updateTime?: string;
  };

  type OrgVO = {
    children?: OrgVO[];
    /** 行政区划编码长度 */
    codeLength?: number;
    /** 创建时间 */
    createTime?: string;
    /** 删除标记,1:已删除,0:正常 */
    delFlag?: number;
    /** 逻辑删除辅助字段 */
    delKey?: number;
    /** 行政区划编码 */
    districtCode?: string;
    /** 部门所属的行政区划OID */
    districtOid?: number;
    /** 组织全称 */
    fullname?: string;
    /** 组织等级 */
    level?: number;
    name?: string;
    oid?: number;
    /** oid路径 */
    oidPath?: string;
    /** 排序字段 */
    orderby?: number;
    /** 属性图标 */
    orgPropertyIcon?: string;
    /** 组织属性id */
    orgPropertyId?: number;
    /** 属性名称 */
    orgPropertyName?: string;
    /** 组织名称路径 */
    path?: string;
    /** 父组织OID */
    poid?: number;
    /** 第三方数据编码 */
    refCode?: string;
    /** 第三方数据ID */
    refOid?: string;
    /** 备注 */
    remark?: string;
    /** 组织类型 */
    type?: number;
    /** 更新时间 */
    updateTime?: string;
    /** wkt边界数据 */
    wkt?: string;
    /** 专有钉钉部门code */
    zzdOrgCode?: string;
  };

  type quickLoginUsingPOSTParams = {
    /** token */
    token: string;
    /** userInformation */
    userInformation: string;
  };

  type removeDictItemUsingPOSTParams = {
    /** id */
    id: number;
  };

  type removeDictUsingPOSTParams = {
    /** id */
    id: number;
  };

  type ResponseEntityAgent_ = {
    /** 编码 */
    code?: number;
    data?: Agent;
    /** 基本信息 */
    message?: string;
  };

  type ResponseEntityBoolean_ = {
    /** 编码 */
    code?: number;
    /** 返回对象 */
    data?: boolean;
    /** 基本信息 */
    message?: string;
  };

  type ResponseEntityConfig_ = {
    /** 编码 */
    code?: number;
    data?: Config;
    /** 基本信息 */
    message?: string;
  };

  type ResponseEntityListAgent_ = {
    /** 编码 */
    code?: number;
    /** 返回对象 */
    data?: Agent[];
    /** 基本信息 */
    message?: string;
  };

  type ResponseEntityListConfig_ = {
    /** 编码 */
    code?: number;
    /** 返回对象 */
    data?: Config[];
    /** 基本信息 */
    message?: string;
  };

  type ResponseEntityListLlm_ = {
    /** 编码 */
    code?: number;
    /** 返回对象 */
    data?: Llm[];
    /** 基本信息 */
    message?: string;
  };

  type ResponseEntityListResponseEntityAgent_ = {
    /** 编码 */
    code?: number;
    data?: ListResponseEntityAgent_;
    /** 基本信息 */
    message?: string;
  };

  type ResponseEntityListResponseEntityLinkedHashMapStringObject_ = {
    /** 编码 */
    code?: number;
    data?: ListResponseEntityLinkedHashMapStringObject_;
    /** 基本信息 */
    message?: string;
  };

  type ResponseEntityListResponseEntityLlm_ = {
    /** 编码 */
    code?: number;
    data?: ListResponseEntityLlm_;
    /** 基本信息 */
    message?: string;
  };

  type ResponseEntityListResponseEntityOrgProperty_ = {
    /** 编码 */
    code?: number;
    data?: ListResponseEntityOrgProperty_;
    /** 基本信息 */
    message?: string;
  };

  type ResponseEntityListResponseEntityOrgVO_ = {
    /** 编码 */
    code?: number;
    data?: ListResponseEntityOrgVO_;
    /** 基本信息 */
    message?: string;
  };

  type ResponseEntityListResponseEntitySysDictItem_ = {
    /** 编码 */
    code?: number;
    data?: ListResponseEntitySysDictItem_;
    /** 基本信息 */
    message?: string;
  };

  type ResponseEntityListResponseEntitySysDictVO_ = {
    /** 编码 */
    code?: number;
    data?: ListResponseEntitySysDictVO_;
    /** 基本信息 */
    message?: string;
  };

  type ResponseEntityListResponseEntitySysFile_ = {
    /** 编码 */
    code?: number;
    data?: ListResponseEntitySysFile_;
    /** 基本信息 */
    message?: string;
  };

  type ResponseEntityListResponseEntitySysLog_ = {
    /** 编码 */
    code?: number;
    data?: ListResponseEntitySysLog_;
    /** 基本信息 */
    message?: string;
  };

  type ResponseEntityListResponseEntitySysMenu_ = {
    /** 编码 */
    code?: number;
    data?: ListResponseEntitySysMenu_;
    /** 基本信息 */
    message?: string;
  };

  type ResponseEntityListResponseEntitySysNoticeVO_ = {
    /** 编码 */
    code?: number;
    data?: ListResponseEntitySysNoticeVO_;
    /** 基本信息 */
    message?: string;
  };

  type ResponseEntityListResponseEntitySysRole_ = {
    /** 编码 */
    code?: number;
    data?: ListResponseEntitySysRole_;
    /** 基本信息 */
    message?: string;
  };

  type ResponseEntityListResponseEntitySysRoleVO_ = {
    /** 编码 */
    code?: number;
    data?: ListResponseEntitySysRoleVO_;
    /** 基本信息 */
    message?: string;
  };

  type ResponseEntityListResponseEntitySysTag_ = {
    /** 编码 */
    code?: number;
    data?: ListResponseEntitySysTag_;
    /** 基本信息 */
    message?: string;
  };

  type ResponseEntityListResponseEntitySysUserVO_ = {
    /** 编码 */
    code?: number;
    data?: ListResponseEntitySysUserVO_;
    /** 基本信息 */
    message?: string;
  };

  type ResponseEntityListResponseEntitySysWarning_ = {
    /** 编码 */
    code?: number;
    data?: ListResponseEntitySysWarning_;
    /** 基本信息 */
    message?: string;
  };

  type ResponseEntityListResponseEntityWritingMaterial_ = {
    /** 编码 */
    code?: number;
    data?: ListResponseEntityWritingMaterial_;
    /** 基本信息 */
    message?: string;
  };

  type ResponseEntityListResponseEntityWritingTopic_ = {
    /** 编码 */
    code?: number;
    data?: ListResponseEntityWritingTopic_;
    /** 基本信息 */
    message?: string;
  };

  type ResponseEntityListString_ = {
    /** 编码 */
    code?: number;
    /** 返回对象 */
    data?: string[];
    /** 基本信息 */
    message?: string;
  };

  type ResponseEntityListSysUserDetailVO_ = {
    /** 编码 */
    code?: number;
    /** 返回对象 */
    data?: SysUserDetailVO[];
    /** 基本信息 */
    message?: string;
  };

  type ResponseEntityListWritingMaterial_ = {
    /** 编码 */
    code?: number;
    /** 返回对象 */
    data?: WritingMaterial[];
    /** 基本信息 */
    message?: string;
  };

  type ResponseEntityListWritingTopic_ = {
    /** 编码 */
    code?: number;
    /** 返回对象 */
    data?: WritingTopic[];
    /** 基本信息 */
    message?: string;
  };

  type ResponseEntityLlm_ = {
    /** 编码 */
    code?: number;
    data?: Llm;
    /** 基本信息 */
    message?: string;
  };

  type ResponseEntityLong_ = {
    /** 编码 */
    code?: number;
    /** 返回对象 */
    data?: number;
    /** 基本信息 */
    message?: string;
  };

  type ResponseEntityMapStringString_ = {
    /** 编码 */
    code?: number;
    /** 返回对象 */
    data?: Record<string, any>;
    /** 基本信息 */
    message?: string;
  };

  type ResponseEntityOrg_ = {
    /** 编码 */
    code?: number;
    data?: Org;
    /** 基本信息 */
    message?: string;
  };

  type ResponseEntityOrgVO_ = {
    /** 编码 */
    code?: number;
    data?: OrgVO;
    /** 基本信息 */
    message?: string;
  };

  type ResponseEntityServerInfo_ = {
    /** 编码 */
    code?: number;
    data?: ServerInfo;
    /** 基本信息 */
    message?: string;
  };

  type ResponseEntityString_ = {
    /** 编码 */
    code?: number;
    /** 返回对象 */
    data?: string;
    /** 基本信息 */
    message?: string;
  };

  type ResponseEntitySysDictItem_ = {
    /** 编码 */
    code?: number;
    data?: SysDictItem;
    /** 基本信息 */
    message?: string;
  };

  type ResponseEntitySysNoticeVO_ = {
    /** 编码 */
    code?: number;
    data?: SysNoticeVO;
    /** 基本信息 */
    message?: string;
  };

  type ResponseEntitySysTag_ = {
    /** 编码 */
    code?: number;
    data?: SysTag;
    /** 基本信息 */
    message?: string;
  };

  type ResponseEntitySysUserDetailVO_ = {
    /** 编码 */
    code?: number;
    data?: SysUserDetailVO;
    /** 基本信息 */
    message?: string;
  };

  type ResponseEntitySysUserVO_ = {
    /** 编码 */
    code?: number;
    data?: SysUserVO;
    /** 基本信息 */
    message?: string;
  };

  type ResponseEntityVoid_ = {
    /** 编码 */
    code?: number;
    /** 基本信息 */
    message?: string;
  };

  type ResponseEntityWritingMaterial_ = {
    /** 编码 */
    code?: number;
    data?: WritingMaterial;
    /** 基本信息 */
    message?: string;
  };

  type ResponseEntityWritingTopic_ = {
    /** 编码 */
    code?: number;
    data?: WritingTopic;
    /** 基本信息 */
    message?: string;
  };

  type ServerInfo = {
    cpu?: CpuInfo;
    directoryFile?: DirectoryFile;
    jvm?: Jvm;
    mem?: Mem;
    sys?: Sys;
    sysFiles?: SysFile[];
  };

  type setRoleMenuUsingPOSTParams = {
    /** roleId */
    roleId: number;
  };

  type Sys = {
    /** 服务器Ip */
    computerIp?: string;
    /** 服务器名称 */
    computerName?: string;
    /** 系统架构 */
    osArch?: string;
    /** 操作系统 */
    osName?: string;
    /** 项目路径 */
    userDir?: string;
  };

  type SysDict = {
    /** 创建时间 */
    createTime?: string;
    /** 删除标记,1:已删除,0:正常 */
    delFlag?: number;
    /** 逻辑删除辅助字段 */
    delKey?: number;
    /** 字典描述 */
    description?: string;
    /** 字典类型 */
    dictType?: string;
    id?: number;
    /** 是否系统内置（0:否, 1:是） */
    systemFlag?: number;
    /** 更新时间 */
    updateTime?: string;
  };

  type SysDictItem = {
    /** 创建时间 */
    createTime?: string;
    /** 删除标记,1:已删除,0:正常 */
    delFlag?: number;
    /** 逻辑删除辅助字段 */
    delKey?: number;
    /** 字典ID */
    dictId?: number;
    /** 类型 */
    dictType?: string;
    id?: number;
    /** 数据值 */
    itemValue?: string;
    /** 标签名 */
    label?: string;
    /** 备注信息 */
    remark?: string;
    /** 排序值，默认升序 */
    sortOrder?: number;
    /** 更新时间 */
    updateTime?: string;
  };

  type SysDictVO = {
    /** 创建时间 */
    createTime?: string;
    /** 删除标记,1:已删除,0:正常 */
    delFlag?: number;
    /** 逻辑删除辅助字段 */
    delKey?: number;
    /** 字典描述 */
    description?: string;
    dictItemList?: SysDictItem[];
    /** 字典类型 */
    dictType?: string;
    id?: number;
    /** 是否系统内置（0:否, 1:是） */
    systemFlag?: number;
    /** 更新时间 */
    updateTime?: string;
  };

  type SysFile = {
    /** 空间名 */
    bucketName?: string;
    /** 上传时间 */
    createTime?: string;
    /** 创建人 */
    createUser?: string;
    delFlag?: string;
    /** 文件名 */
    fileName?: string;
    /** 文件大小 */
    fileSize?: number;
    /** 编号 */
    id?: string;
    /** 文件是否有效，默认1-有效，0-无效 */
    isValid?: number;
    original?: string;
    /** 文件存储位置：1.文件服务器，2.ECS服务器 */
    position?: string;
    /** 来源：0文件上传模块，1其他模块 */
    source?: number;
    /** 文件类型 */
    type?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 修改人 */
    updateUser?: string;
  };

  type SysLog = {
    code?: string;
    content?: string;
    /** 创建时间, 自动生成! */
    createTime?: string;
    /** 主键, 自动生成! */
    id?: string;
    ip?: string;
    method?: string;
    operator?: string;
    operatorUid?: number;
    params?: string;
    type?: string;
  };

  type SysMenu = {
    /** 菜单类型：（目录、菜单、外链、路由跳转） */
    category?: number;
    /** 页面路径，指向src/pages */
    component?: string;
    /** 创建时间 */
    createTime?: string;
    /** 删除标记,1:已删除,0:正常 */
    delFlag?: number;
    /** 逻辑删除辅助字段 */
    delKey?: number;
    /** 图标 */
    icon?: string;
    id?: number;
    /** 默认配置标识 */
    isDefault?: boolean;
    /** 是否隐藏菜单(包含子菜单) */
    isHidden?: boolean;
    /** layout可见性 */
    layout?: boolean;
    /** 菜单名称 */
    name?: string;
    /** 菜单路径名称 */
    pathName?: string;
    /** 菜单权限标识 */
    permission?: string;
    /** 菜单父id */
    pid?: number;
    /** url匹配的跳转路径 */
    redirect?: string;
    /** 排序值 */
    sortOrder?: number;
    /** 指定外链打开形式，同a标签 */
    target?: string;
    /** 客户端类型 */
    type?: number;
    /** 更新时间 */
    updateTime?: string;
    /** 路由路径 */
    url?: string;
  };

  type SysNotice = {
    /** 通知内容 */
    content?: string;
    /** 发布者姓名 */
    createBy?: string;
    /** 创建时间 */
    createTime?: string;
    /** 发布者ID */
    createUid?: number;
    id?: number;
    /** 封面照片 */
    pic?: string;
    /** 可见范围：0部分公开，1全部可见 */
    scope?: number;
    /** 发布状态，0-未发布， 1-已发布 */
    status?: number;
    /** 标签id */
    tagId?: number;
    /** 通知标题 */
    title?: string;
    /** 消息类型：0-通知，1-公告 */
    type?: number;
    /** 更新时间 */
    updateTime?: string;
  };

  type SysNoticeDTO = {
    /** 通知内容 */
    content?: string;
    /** 发布者姓名 */
    createBy?: string;
    /** 创建时间 */
    createTime?: string;
    /** 发布者ID */
    createUid?: number;
    id?: number;
    /** 封面照片 */
    pic?: string;
    /** 可见范围：0部分公开，1全部可见 */
    scope?: number;
    /** 发布状态，0-未发布， 1-已发布 */
    status?: number;
    /** 标签id */
    tagId?: number;
    /** 通知标题 */
    title?: string;
    /** 消息类型：0-通知，1-公告 */
    type?: number;
    uidList?: number[];
    /** 更新时间 */
    updateTime?: string;
  };

  type SysNoticeVO = {
    /** 通知内容 */
    content?: string;
    /** 发布者姓名 */
    createBy?: string;
    /** 创建时间 */
    createTime?: string;
    /** 发布者ID */
    createUid?: number;
    id?: number;
    /** 封面照片 */
    pic?: string;
    /** 状态：0未读，1已读 */
    readStatus?: number;
    /** 可见范围：0部分公开，1全部可见 */
    scope?: number;
    /** 发布状态，0-未发布， 1-已发布 */
    status?: number;
    /** 标签id */
    tagId?: number;
    /** 标签名称 */
    tagName?: string;
    /** 通知标题 */
    title?: string;
    /** 消息类型：0-通知，1-公告 */
    type?: number;
    /** 更新时间 */
    updateTime?: string;
    userList?: SysUser[];
  };

  type SysRole = {
    /** 创建时间 */
    createTime?: string;
    /** 删除标记,1:已删除,0:正常 */
    delFlag?: number;
    /** 逻辑删除辅助字段 */
    delKey?: number;
    /** 数据权限作用范围 */
    dsScope?: string;
    /** 数据权限类型 */
    dsType?: number;
    id?: number;
    /** 默认角色标志，1:是,0:否 */
    isDefault?: number;
    /** 角色级别 */
    level?: number;
    pid?: number;
    /** 角色标识 */
    roleCode?: string;
    /** 角色描述 */
    roleDesc?: string;
    /** 角色名称 */
    roleName?: string;
    /** 更新时间 */
    updateTime?: string;
  };

  type SysRoleVO = {
    child?: SysRoleVO[];
    /** 创建时间 */
    createTime?: string;
    /** 删除标记,1:已删除,0:正常 */
    delFlag?: number;
    /** 逻辑删除辅助字段 */
    delKey?: number;
    /** 数据权限作用范围 */
    dsScope?: string;
    /** 数据权限类型 */
    dsType?: number;
    id?: number;
    /** 默认角色标志，1:是,0:否 */
    isDefault?: number;
    /** 角色级别 */
    level?: number;
    pid?: number;
    /** 角色标识 */
    roleCode?: string;
    /** 角色描述 */
    roleDesc?: string;
    roleMenus?: SysMenu[];
    /** 角色名称 */
    roleName?: string;
    /** 更新时间 */
    updateTime?: string;
  };

  type SysTag = {
    /** 标签颜色 */
    color?: string;
    /** 创建时间 */
    createTime?: string;
    /** 删除标记,1:已删除,0:正常 */
    delFlag?: number;
    /** 逻辑删除辅助字段 */
    delKey?: number;
    /** 标签所属模块（存字典项表中的item_value） */
    dictItemValue?: string;
    id?: number;
    /** 标签id路径 */
    idPath?: string;
    /** 级别 */
    level?: number;
    /** 父id（不传：默认是0，也就是一级标签） */
    parentId?: number;
    /** 标签名称路径 */
    path?: string;
    /** 排序字段 */
    sort?: number;
    /** 标签描述 */
    tagDescription?: string;
    /** 标签名称 */
    tagName?: string;
    /** 更新时间 */
    updateTime?: string;
  };

  type SysUser = {
    /** 拓展字段:头像 */
    avatarUrl?: string;
    /** 创建时间 */
    createTime?: string;
    /** 删除标记,1:已删除,0:正常 */
    delFlag?: number;
    /** 逻辑删除辅助字段 */
    delKey?: number;
    /** 普通钉钉userid */
    dingTalkUid?: string;
    /** 拓展字段:邮箱 */
    email?: string;
    id?: number;
    /** 登陆名 */
    loginName?: string;
    /** 用户联系方式 */
    mobile?: string;
    /** 用户真实姓名 */
    name?: string;
    /** 拓展字段:昵称 */
    nickname?: string;
    /** 最近一次密码更新的时间 */
    pwdLastUpdatedTime?: string;
    /** 备注 */
    remark?: string;
    /** 三方同步来的用户唯一id */
    syncId?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 微信小程序openId */
    wxMaOpenid?: string;
    /** 微信服务号openId */
    wxMpOpenid?: string;
    /** 微信unionId */
    wxUnionid?: string;
    /** 浙政钉ID */
    zzdId?: string;
  };

  type SysUserDetailVO = {
    activeOid?: number;
    activeOrgRole?: UserOrgRoleVO;
    activeRoleId?: number;
    /** 拓展字段:头像 */
    avatarUrl?: string;
    /** 创建时间 */
    createTime?: string;
    /** 删除标记,1:已删除,0:正常 */
    delFlag?: number;
    /** 逻辑删除辅助字段 */
    delKey?: number;
    /** 普通钉钉userid */
    dingTalkUid?: string;
    /** 拓展字段:邮箱 */
    email?: string;
    id?: number;
    /** 登陆名 */
    loginName?: string;
    /** 用户联系方式 */
    mobile?: string;
    /** 用户真实姓名 */
    name?: string;
    /** 拓展字段:昵称 */
    nickname?: string;
    orgRoles?: UserOrgRoleVO[];
    /** 最近一次密码更新的时间 */
    pwdLastUpdatedTime?: string;
    /** 备注 */
    remark?: string;
    /** 三方同步来的用户唯一id */
    syncId?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 微信小程序openId */
    wxMaOpenid?: string;
    /** 微信服务号openId */
    wxMpOpenid?: string;
    /** 微信unionId */
    wxUnionid?: string;
    /** 浙政钉ID */
    zzdId?: string;
  };

  type SysUserDTO = {
    /** 拓展字段:头像 */
    avatarUrl?: string;
    /** 创建时间 */
    createTime?: string;
    /** 删除标记,1:已删除,0:正常 */
    delFlag?: number;
    /** 逻辑删除辅助字段 */
    delKey?: number;
    /** 普通钉钉userid */
    dingTalkUid?: string;
    /** 拓展字段:邮箱 */
    email?: string;
    id?: number;
    /** 登陆名 */
    loginName?: string;
    /** 用户联系方式 */
    mobile?: string;
    /** 用户真实姓名 */
    name?: string;
    /** 新密码 */
    newPwd?: string;
    /** 拓展字段:昵称 */
    nickname?: string;
    /** 原密码 */
    oldPwd?: string;
    /** 密码 */
    password?: string;
    /** 最近一次密码更新的时间 */
    pwdLastUpdatedTime?: string;
    /** 备注 */
    remark?: string;
    /** 三方同步来的用户唯一id */
    syncId?: string;
    /** 更新时间 */
    updateTime?: string;
    userOrgRoles?: UserOrgRole[];
    /** 微信小程序openId */
    wxMaOpenid?: string;
    /** 微信服务号openId */
    wxMpOpenid?: string;
    /** 微信unionId */
    wxUnionid?: string;
    /** 浙政钉ID */
    zzdId?: string;
  };

  type SysUserVO = {
    /** 当前组织OID */
    activeOid?: number;
    /** 当前组织名称 */
    activeOrgName?: string;
    /** 当前组织路径 */
    activeOrgPath?: string;
    /** 当前组织父级OID */
    activePoid?: number;
    /** 当前角色编码 */
    activeRoleCode?: string;
    /** 当前角色ID */
    activeRoleId?: number;
    /** 当前角色名称 */
    activeRoleName?: string;
    /** 关联信息（组织与角色） */
    associatedInfos?: UserAssociatedInfoVO[];
    /** 拓展字段:头像 */
    avatarUrl?: string;
    /** 创建时间 */
    createTime?: string;
    /** 删除标记,1:已删除,0:正常 */
    delFlag?: number;
    /** 逻辑删除辅助字段 */
    delKey?: number;
    /** 普通钉钉userid */
    dingTalkUid?: string;
    /** 拓展字段:邮箱 */
    email?: string;
    /** 通知消息是否撤回：0否，1是 */
    flagDel?: number;
    id?: number;
    /** 是否已禁用 */
    isForbidden?: boolean;
    /** 登陆名 */
    loginName?: string;
    /** 用户联系方式 */
    mobile?: string;
    /** 用户真实姓名 */
    name?: string;
    /** 拓展字段:昵称 */
    nickname?: string;
    /** 最近一次密码更新的时间 */
    pwdLastUpdatedTime?: string;
    /** 状态：0未读，1已读 */
    readStatus?: number;
    /** 备注 */
    remark?: string;
    /** 三方同步来的用户唯一id */
    syncId?: string;
    token?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 微信小程序openId */
    wxMaOpenid?: string;
    /** 微信服务号openId */
    wxMpOpenid?: string;
    /** 微信unionId */
    wxUnionid?: string;
    /** 浙政钉ID */
    zzdId?: string;
  };

  type SysWarning = {
    /** 创建时间 */
    createTime?: string;
    /** 是否推送 */
    flagSend?: number;
    /** 预警处理时间 */
    handleTime?: string;
    /** 预警处理人 */
    handleUser?: string;
    /** 预警发生时间 */
    happenTime?: string;
    id?: number;
    /** 预警等级 */
    level?: number;
    /** 推送方式：来自系统配置选择（例如：短信，钉钉机器人等） */
    sendMethod?: string;
    /** 预警状态：0未处理，1已处理 */
    status?: number;
    /** 预警类型 */
    type?: number;
    /** 更新时间 */
    updateTime?: string;
    /** 预警内容 */
    warningContent?: string;
    /** 预警标题 */
    warningTitle?: string;
  };

  type updateNoticeUserStatusUsingPOSTParams = {
    /** 通知id */
    noticeId: number;
  };

  type uploadLocalUsingPOSTParams = {
    /** 默认type=1 为图片，2为非图片文件 */
    type?: string;
  };

  type uploadUsingPOSTParams = {
    /** type */
    type?: string;
  };

  type UserAssociatedInfoVO = {
    oid?: number;
    orgLevel?: number;
    orgName?: string;
    orgPath?: string;
    roleCode?: string;
    roleId?: number;
    roleLevel?: number;
    roleName?: string;
  };

  type UserOrgRole = {
    /** 组织OID */
    oid?: number;
    /** 排序字段 */
    orderby?: number;
    /** 角色编码 */
    roleCode?: string;
    /** 角色ID */
    roleId?: number;
    /** 用户UID */
    uid?: number;
  };

  type UserOrgRoleVO = {
    /** 组织OID */
    oid?: number;
    /** 排序字段 */
    orderby?: number;
    org?: Org;
    role?: SysRoleVO;
    /** 角色编码 */
    roleCode?: string;
    /** 角色ID */
    roleId?: number;
    /** 用户UID */
    uid?: number;
  };

  type View = {
    contentType?: string;
  };

  type viewStatementUsingGETParams = {
    /** filter */
    filter?: string;
    /** page */
    page?: number;
    /** password */
    password?: string;
    /** size */
    size?: number;
    /** statementCode */
    statementCode: string;
  };

  type WritingMaterial = {
    /** 素材内容 */
    content?: string;
    createAt?: string;
    /** 是否主要素材 */
    flagPrimary?: number;
    id?: number;
    /** 状态 */
    status?: string;
    /** 素材名称 */
    title?: string;
    /** 选题ID */
    topicId?: number;
    updateAt?: string;
    /** 素材URL */
    url?: string;
  };

  type WritingMaterialDto = {
    /** 素材内容 */
    content?: string;
    createAt?: string;
    /** 是否主要素材 */
    flagPrimary?: number;
    id?: number;
    /** 状态 */
    status?: string;
    /** 素材名称 */
    title?: string;
    /** 选题ID */
    topicId?: number;
    updateAt?: string;
    /** 素材URL */
    url?: string;
  };

  type WritingMaterialListPageQuery = {
    keyword?: string;
    pageNo?: number;
    pageSize?: number;
  };

  type WritingTopic = {
    createAt?: string;
    description?: string;
    id?: number;
    points?: string;
    title?: string;
    updateAt?: string;
  };

  type WritingTopicDto = {
    createAt?: string;
    description?: string;
    id?: number;
    points?: string;
    title?: string;
    updateAt?: string;
  };

  type WritingTopicListPageQuery = {
    keyword?: string;
    pageNo?: number;
    pageSize?: number;
  };
}
