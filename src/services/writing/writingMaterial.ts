// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 添加 POST /writingMaterial/create */
export async function createWritingMaterial(
  body: API.WritingMaterialDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityWritingMaterial_>(
    `/api/writingMaterial/create`,
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

/** 删除 POST /writingMaterial/delete */
export async function deleteWritingMaterial(
  body: API.WritingMaterialDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityVoid_>(`/api/writingMaterial/delete`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取 POST /writingMaterial/fetch */
export async function fetchWritingMaterial(
  body: API.WritingMaterialDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityWritingMaterial_>(
    `/api/writingMaterial/fetch`,
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

/** 添加 POST /writingMaterial/get */
export async function getWritingMaterial(
  body: API.WritingMaterialDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityWritingMaterial_>(
    `/api/writingMaterial/get`,
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

/** 列表查询 POST /writingMaterial/list */
export async function listWritingMaterial(
  body: API.WritingMaterialListPageQuery,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityListWritingMaterial_>(
    `/api/writingMaterial/list`,
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

/** 分页查询 POST /writingMaterial/pageList */
export async function pageListWritingMaterial(
  body: API.WritingMaterialListPageQuery,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityListResponseEntityWritingMaterial_>(
    `/api/writingMaterial/pageList`,
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

/** 编辑 POST /writingMaterial/update */
export async function updateWritingMaterial(
  body: API.WritingMaterialDto,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityWritingMaterial_>(
    `/api/writingMaterial/update`,
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
