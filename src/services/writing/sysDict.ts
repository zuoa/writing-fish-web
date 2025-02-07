// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 添加字典 POST /sysDict/addDict */
export async function addDictUsingPost(
  body: API.SysDict,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityString_>(`/api/sysDict/addDict`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 添加字典项 POST /sysDict/addDictItem */
export async function addDictItemUsingPost(
  body: API.SysDictItem,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntitySysDictItem_>(`/api/sysDict/addDictItem`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 字典列表 POST /sysDict/findAll */
export async function findAllUsingPost2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findAllUsingPOST2Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityListResponseEntitySysDictVO_>(
    `/api/sysDict/findAll`,
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

/** 字典项列表 POST /sysDict/getItemList */
export async function getListByDictIdUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getListByDictIdUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityListResponseEntitySysDictItem_>(
    `/api/sysDict/getItemList`,
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

/** 删除字典 POST /sysDict/removeDict */
export async function removeDictUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.removeDictUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityString_>(`/api/sysDict/removeDict`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 删除字典项 POST /sysDict/removeDictItem */
export async function removeDictItemUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.removeDictItemUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityString_>(`/api/sysDict/removeDictItem`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 更新字典 POST /sysDict/updateDict */
export async function updateDictUsingPost(
  body: API.SysDict,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityString_>(`/api/sysDict/updateDict`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新字典项 POST /sysDict/updateDictItem */
export async function updateDictItemUsingPost(
  body: API.SysDictItem,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntitySysDictItem_>(
    `/api/sysDict/updateDictItem`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}
