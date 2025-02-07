// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** file GET /sysFile/${param0}/${param1} */
export async function fileUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.fileUsingGETParams,
  options?: { [key: string]: any },
) {
  const { bucket: param0, fileName: param1, ...queryParams } = params;
  return request<any>(`/api/sysFile/${param0}/${param1}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 通过id删除文件管理 通过id删除文件管理 DELETE /sysFile/batchDel */
export async function removeByIdUsingDelete(
  body: number[],
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityString_>(`/api/sysFile/batchDel`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 通用查询 POST /sysFile/findAll */
export async function findAllUsingPost3(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findAllUsingPOST3Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityListResponseEntitySysFile_>(
    `/api/sysFile/findAll`,
    {
      method: 'POST',
      params: {
        // page has a default value: 1
        page: '1',
        // size has a default value: 10
        size: '10',
        // source has a default value: -1
        source: '-1',
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 本地上传 POST /sysFile/local/upload */
export async function uploadLocalUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.uploadLocalUsingPOSTParams,
  body: {},
  file?: File,
  options?: { [key: string]: any },
) {
  const formData = new FormData();

  if (file) {
    formData.append('file', file);
  }

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      if (typeof item === 'object' && !(item instanceof File)) {
        if (item instanceof Array) {
          item.forEach((f) => formData.append(ele, f || ''));
        } else {
          formData.append(ele, JSON.stringify(item));
        }
      } else {
        formData.append(ele, item);
      }
    }
  });

  return request<API.ResponseEntityMapStringString_>(
    `/api/sysFile/local/upload`,
    {
      method: 'POST',
      params: {
        // type has a default value: 1
        type: '1',
        ...params,
      },
      data: formData,
      requestType: 'form',
      ...(options || {}),
    },
  );
}

/** oss上传文件,默认type=1 为压缩图片，2为非图片文件 上传文件 POST /sysFile/oss/upload */
export async function uploadUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.uploadUsingPOSTParams,
  body: {},
  file?: File,
  options?: { [key: string]: any },
) {
  const formData = new FormData();

  if (file) {
    formData.append('file', file);
  }

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      if (typeof item === 'object' && !(item instanceof File)) {
        if (item instanceof Array) {
          item.forEach((f) => formData.append(ele, f || ''));
        } else {
          formData.append(ele, JSON.stringify(item));
        }
      } else {
        formData.append(ele, item);
      }
    }
  });

  return request<API.ResponseEntityMapStringString_>(
    `/api/sysFile/oss/upload`,
    {
      method: 'POST',
      params: {
        // type has a default value: 1
        type: '1',
        ...params,
      },
      data: formData,
      requestType: 'form',
      ...(options || {}),
    },
  );
}

/** 统一的文件上传接口入口，默认type=1 为压缩图片，2为非图片文件 POST /sysFile/upload */
export async function fileUploadUsingPost(
  body: {},
  file?: File,
  options?: { [key: string]: any },
) {
  const formData = new FormData();

  if (file) {
    formData.append('file', file);
  }

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      if (typeof item === 'object' && !(item instanceof File)) {
        if (item instanceof Array) {
          item.forEach((f) => formData.append(ele, f || ''));
        } else {
          formData.append(ele, JSON.stringify(item));
        }
      } else {
        formData.append(ele, item);
      }
    }
  });

  return request<API.ResponseEntityMapStringString_>(`/api/sysFile/upload`, {
    method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}
