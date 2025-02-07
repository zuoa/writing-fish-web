// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 添加标签 POST /sysTag/addTag */
export async function addTagUsingPost(
  body: API.SysTag,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityString_>(`/api/sysTag/addTag`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 批量删除标签 POST /sysTag/batchRemoveTag */
export async function batchRemoveTagUsingPost(
  body: number[],
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityString_>(`/api/sysTag/batchRemoveTag`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 标签详情 POST /sysTag/details */
export async function detailsUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.detailsUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntitySysTag_>(`/api/sysTag/details`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 标签列表 POST /sysTag/findAll */
export async function findAllUsingPost7(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findAllUsingPOST7Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityListResponseEntitySysTag_>(
    `/api/sysTag/findAll`,
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

/** 更新标签 POST /sysTag/updateTag */
export async function updateTagUsingPost(
  body: API.SysTag,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityString_>(`/api/sysTag/updateTag`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
