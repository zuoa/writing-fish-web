import { request } from '@umijs/max';

export async function queryTopicList(
  params: {
    // query
    /** keyword */
    keyword?: string;
    /** current */
    page?: number;
    /** pageSize */
    page_size?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.Result_PageInfo_Topic__>('/api/topic/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: params,
    ...(options || {}),
  });
}

export async function addTopic(
  body?: API.Topic,
  options?: { [key: string]: any },
) {
  return request<API.Result_Topic_>('/api/topic/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
