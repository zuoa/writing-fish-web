import { request } from '@umijs/max';

export async function addMaterial(
  body?: API.Material,
  options?: { [key: string]: any },
) {
  return request<API.Result_Material_>('/api/material/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function getMaterial(
  params: {
    id: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.Result_Material_>('/api/material/detail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: params,
    ...(options || {}),
  });
}

export async function fetchUrl(
  params: {
    // query
    /** url */
    url: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.Result>('/api/material/fetch', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: params,
    ...(options || {}),
  });
}
