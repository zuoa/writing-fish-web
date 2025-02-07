// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 添加权限菜单 POST /sysMenu/add */
export async function addUsingPost2(
  body: API.SysMenu,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityString_>(`/api/sysMenu/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 权限菜单批量删除 POST /sysMenu/batchDel */
export async function batchDelUsingPost(
  body: number[],
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityString_>(`/api/sysMenu/batchDel`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 权限菜单列表 POST /sysMenu/findAll */
export async function findAllUsingPost4(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findAllUsingPOST4Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityListResponseEntitySysMenu_>(
    `/api/sysMenu/findAll`,
    {
      method: 'POST',
      params: {
        // page has a default value: 1
        page: '1',

        // size has a default value: 1000
        size: '1000',
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 权限菜单列表 POST /sysMenu/getUserMenuList */
export async function getUserMenuListUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserMenuListUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityListResponseEntitySysMenu_>(
    `/api/sysMenu/getUserMenuList`,
    {
      method: 'POST',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 权限菜单编辑 POST /sysMenu/update */
export async function updateUsingPost1(
  body: API.SysMenu,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityString_>(`/api/sysMenu/update`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
