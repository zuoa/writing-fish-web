// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 添加 POST /orgProperty/add */
export async function addUsingPost1(
  body: API.OrgProperty,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityString_>(`/api/orgProperty/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 组织属性删除 POST /orgProperty/del */
export async function delOrgUsingPost1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delOrgUsingPOST1Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityOrg_>(`/api/orgProperty/del`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 通用查询 POST /orgProperty/findAll */
export async function findAllUsingPost1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findAllUsingPOST1Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityListResponseEntityOrgProperty_>(
    `/api/orgProperty/findAll`,
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

/** 编辑 POST /orgProperty/update */
export async function updateUsingPost(
  body: API.OrgProperty,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityString_>(`/api/orgProperty/update`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
