// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** serverInfo GET /server/info */
export async function serverInfoUsingGet(options?: { [key: string]: any }) {
  return request<API.ResponseEntityServerInfo_>(`/api/server/info`, {
    method: 'GET',
    ...(options || {}),
  });
}
