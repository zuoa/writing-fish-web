// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 新增通知 POST /sysNotice/add */
export async function addUsingPost3(
  body: API.SysNoticeDTO,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityString_>(`/api/sysNotice/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除通知 POST /sysNotice/delete */
export async function deleteUsingPost1(
  body: number[],
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityString_>(`/api/sysNotice/delete`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 通知详情 POST /sysNotice/detail */
export async function detailUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.detailUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntitySysNoticeVO_>(`/api/sysNotice/detail`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 修改通知 POST /sysNotice/edit */
export async function editUsingPost(
  body: API.SysNotice,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityString_>(`/api/sysNotice/edit`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 通用查询 POST /sysNotice/findAll */
export async function findAllUsingPost5(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findAllUsingPOST5Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityListResponseEntitySysNoticeVO_>(
    `/api/sysNotice/findAll`,
    {
      method: 'POST',
      params: {
        // page has a default value: 1
        page: '1',
        // size has a default value: 10
        size: '10',
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 未读消息列表（登陆触发） POST /sysNotice/flagUnReadNotice */
export async function flagUnReadNoticeUsingPost(options?: {
  [key: string]: any;
}) {
  return request<API.ResponseEntityBoolean_>(
    `/api/sysNotice/flagUnReadNotice`,
    {
      method: 'POST',
      ...(options || {}),
    },
  );
}

/** 获取当前登录用户的通知消息列表 POST /sysNotice/getListByUid */
export async function getListByUidUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getListByUidUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityListResponseEntitySysNoticeVO_>(
    `/api/sysNotice/getListByUid`,
    {
      method: 'POST',
      params: {
        // page has a default value: 1
        page: '1',
        // size has a default value: 10
        size: '10',
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 全部标记已读 POST /sysNotice/markAllRead */
export async function markAllReadUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.markAllReadUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityString_>(`/api/sysNotice/markAllRead`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 通知撤回 POST /sysNotice/revoke */
export async function revokeUsingPost(
  body: API.SysNoticeDTO,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityString_>(`/api/sysNotice/revoke`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 通知发送 POST /sysNotice/send */
export async function sendUsingPost(
  body: API.SysNoticeDTO,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityString_>(`/api/sysNotice/send`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 已读通知调用 POST /sysNotice/updateNoticeUserStatus */
export async function updateNoticeUserStatusUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateNoticeUserStatusUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityString_>(
    `/api/sysNotice/updateNoticeUserStatus`,
    {
      method: 'POST',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 根据通知id，查询已发送人员列表 POST /sysNotice/userList */
export async function getNoticeUserListUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getNoticeUserListUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityListResponseEntitySysUserVO_>(
    `/api/sysNotice/userList`,
    {
      method: 'POST',
      params: {
        // page has a default value: 1
        page: '1',
        // size has a default value: 10
        size: '10',
        ...params,
      },
      ...(options || {}),
    },
  );
}
