// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 添加 POST /writingTopic/create */
export async function createWritingTopic(
  body: API.WritingTopicDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityWritingTopic_>(`/api/writingTopic/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 POST /writingTopic/delete */
export async function deleteWritingTopic(
  body: API.WritingTopicDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityVoid_>(`/api/writingTopic/delete`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询单个 POST /writingTopic/get */
export async function getWritingTopic(
  body: API.WritingTopicDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityWritingTopic_>(`/api/writingTopic/get`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 列表查询 POST /writingTopic/list */
export async function listWritingTopic(
  body: API.WritingTopicListPageQuery,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityListWritingTopic_>(
    `/api/writingTopic/list`,
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

/** 分页查询 POST /writingTopic/pageList */
export async function pageListWritingTopic(
  body: API.WritingTopicListPageQuery,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityListResponseEntityWritingTopic_>(
    `/api/writingTopic/pageList`,
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

/** 编辑 POST /writingTopic/update */
export async function updateWritingTopic(
  body: API.WritingTopicDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityWritingTopic_>(`/api/writingTopic/update`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
