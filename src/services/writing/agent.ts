// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 添加 POST /agent/create */
export async function createAgent(
  body: API.AgentDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityAgent_>(`/api/agent/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 POST /agent/delete */
export async function deleteAgent(
  body: API.Agent,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityVoid_>(`/api/agent/delete`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 列表查询 POST /agent/list */
export async function listAgent(
  body: API.AgentListPageQuery,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityListAgent_>(`/api/agent/list`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 分页查询 POST /agent/pageList */
export async function pageListAgent(
  body: API.AgentListPageQuery,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityListResponseEntityAgent_>(
    `/api/agent/pageList`,
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

/** 编辑 POST /agent/update */
export async function updateAgent(
  body: API.AgentDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityAgent_>(`/api/agent/update`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
