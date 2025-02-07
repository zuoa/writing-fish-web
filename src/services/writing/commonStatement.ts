// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 报表 POST /commonstatement/list/${param0} */
export async function listStatementUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listStatementUsingPOSTParams,
  options?: { [key: string]: any },
) {
  const { statementCode: param0, ...queryParams } = params;
  return request<API.ResponseEntityListResponseEntityLinkedHashMapStringObject_>(
    `/api/commonstatement/list/${param0}`,
    {
      method: 'POST',
      params: {
        // page has a default value: 1
        page: '1',

        // size has a default value: 200
        size: '200',
        ...queryParams,
      },
      ...(options || {}),
    },
  );
}

/** 报表 GET /commonstatement/view/${param0} */
export async function viewStatementUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.viewStatementUsingGETParams,
  options?: { [key: string]: any },
) {
  const { statementCode: param0, ...queryParams } = params;
  return request<API.ModelAndView>(`/api/commonstatement/view/${param0}`, {
    method: 'GET',
    params: {
      // page has a default value: 1
      page: '1',

      // size has a default value: 200
      size: '200',
      ...queryParams,
    },
    ...(options || {}),
  });
}
