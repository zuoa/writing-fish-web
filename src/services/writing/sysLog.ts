// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 日志信息 POST /log/all */
export async function getPersonsUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPersonsUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityListResponseEntitySysLog_>(`/api/log/all`, {
    method: 'POST',
    params: {
      // page has a default value: 1
      page: '1',
      // size has a default value: 10
      size: '10',
      ...params,
    },
    ...(options || {}),
  });
}
