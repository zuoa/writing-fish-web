// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 组织添加 POST /org/add */
export async function addOrgUsingPost(
  body: API.Org,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityOrgVO_>(`/api/org/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 通用查询 POST /org/all */
export async function findAllUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findAllUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityListResponseEntityOrgVO_>(`/api/org/all`, {
    method: 'POST',
    params: {
      // page has a default value: 1
      page: '1',

      // size has a default value: 20
      size: '20',

      ...params,
    },
    ...(options || {}),
  });
}

/** 组织删除（包含子组织） POST /org/del */
export async function delOrgUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delOrgUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityOrg_>(`/api/org/del`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 组织详情 POST /org/detail */
export async function getOrgUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getOrgUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityOrgVO_>(`/api/org/detail`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 组织树状展示 POST /org/tree */
export async function getTreeUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTreeUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityOrgVO_>(`/api/org/tree`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 组织修改 POST /org/update */
export async function updateOrgUsingPost(
  body: API.Org,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityOrgVO_>(`/api/org/update`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
