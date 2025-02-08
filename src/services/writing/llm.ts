// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 添加 POST /llm/create */
export async function createLlm(
  body: API.LlmDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityLlm_>(`/api/llm/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 POST /llm/delete */
export async function deleteLlm(
  body: API.Llm,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityVoid_>(`/api/llm/delete`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 列表查询 POST /llm/list */
export async function listLlm(
  body: API.LlmListPageQuery,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityListLlm_>(`/api/llm/list`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 分页查询 POST /llm/pageList */
export async function pageListLlm(
  body: API.LlmListPageQuery,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityListResponseEntityLlm_>(
    `/api/llm/pageList`,
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

/** 测试 POST /llm/test */
export async function testLlm(
  body: API.LlmDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityString_>(`/api/llm/test`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 编辑 POST /llm/update */
export async function updateLlm(
  body: API.LlmDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityLlm_>(`/api/llm/update`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
