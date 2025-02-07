// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 添加 POST /sysWarning/add */
export async function addUsingPost5(
  body: API.SysWarning,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityString_>(`/api/sysWarning/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 通用查询 POST /sysWarning/findAll */
export async function findAllUsingPost9(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findAllUsingPOST9Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityListResponseEntitySysWarning_>(
    `/api/sysWarning/findAll`,
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

/** 编辑 POST /sysWarning/update */
export async function updateUsingPost3(
  body: API.SysWarning,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityString_>(`/api/sysWarning/update`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
