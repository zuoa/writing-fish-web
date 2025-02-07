// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 添加配置信息 POST /config/add */
export async function addUsingPost(
  body: API.Config,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityString_>(`/api/config/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除配置信息 POST /config/delete */
export async function deleteUsingPost(
  body: number[],
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityString_>(`/api/config/delete`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 配置信息 POST /config/detail */
export async function getConfigByKUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getConfigByKUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityConfig_>(`/api/config/detail`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取所有系统配置的大类集合 POST /config/getLargeCategory */
export async function getLargeCategoryUsingPost(options?: {
  [key: string]: any;
}) {
  return request<API.ResponseEntityListString_>(
    `/api/config/getLargeCategory`,
    {
      method: 'POST',
      ...(options || {}),
    },
  );
}

/** 根据k值集合获取配置列表 POST /config/getListByKeys */
export async function getListByKeysUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getListByKeysUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityListConfig_>(`/api/config/getListByKeys`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取服务器时间戳 POST /config/getServiceTimeStamp */
export async function getServiceTimeStampUsingPost(options?: {
  [key: string]: any;
}) {
  return request<API.ResponseEntityLong_>(`/api/config/getServiceTimeStamp`, {
    method: 'POST',
    ...(options || {}),
  });
}

/** 更新配置信息 POST /config/update */
export async function updateConfigByIdUsingPost(
  body: API.Config[],
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityString_>(`/api/config/update`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
