// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 角色添加 POST /sysRole/add */
export async function addRoleUsingPost(
  body: API.SysRole,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityString_>(`/api/sysRole/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 角色删除 POST /sysRole/del */
export async function delRoleUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delRoleUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityString_>(`/api/sysRole/del`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 通用列表 POST /sysRole/findAll */
export async function findAllUsingPost6(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findAllUsingPOST6Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityListResponseEntitySysRoleVO_>(
    `/api/sysRole/findAll`,
    {
      method: 'POST',
      params: {
        // page has a default value: 1
        page: '1',
        // roleId has a default value: -1
        roleId: '-1',
        // size has a default value: 10
        size: '10',
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 获取所有角色名称和id POST /sysRole/getAll */
export async function getAllUsingPost(options?: { [key: string]: any }) {
  return request<API.ResponseEntityListResponseEntitySysRole_>(
    `/api/sysRole/getAll`,
    {
      method: 'POST',
      ...(options || {}),
    },
  );
}

/** 设置角色菜单权限 POST /sysRole/setRoleMenu */
export async function setRoleMenuUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.setRoleMenuUsingPOSTParams,
  body: number[],
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityString_>(`/api/sysRole/setRoleMenu`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...params,
    },
    data: body,
    ...(options || {}),
  });
}

/** 角色修改 POST /sysRole/update */
export async function updateRoleUsingPost(
  body: API.SysRole,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityString_>(`/api/sysRole/update`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
