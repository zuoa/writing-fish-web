// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 切换用户所属组织及对应角色 POST /sysUser/activeOrgRole */
export async function activeOrgRoleUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.activeOrgRoleUsingPOSTParams,
  body: API.UserOrgRole,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntitySysUserVO_>(`/api/sysUser/activeOrgRole`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...params,
    },
    data: body,
    ...(options || {}),
  });
}

/** 添加用户信息 POST /sysUser/add */
export async function addUsingPost4(
  body: API.SysUserDTO,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityString_>(`/api/sysUser/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除用户信息 POST /sysUser/del */
export async function delUsingPost(
  body: number[],
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityString_>(`/api/sysUser/del`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户详情 POST /sysUser/detail */
export async function getByUidUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getByUidUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntitySysUserDetailVO_>(`/api/sysUser/detail`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据用户名获取用户详情 POST /sysUser/detailByName */
export async function getByUidUsingPost1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getByUidUsingPOST1Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntitySysUserVO_>(`/api/sysUser/detailByName`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 通用列表 POST /sysUser/findAll */
export async function findAllUsingPost8(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findAllUsingPOST8Params,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityListResponseEntitySysUserVO_>(
    `/api/sysUser/findAll`,
    {
      method: 'POST',
      params: {
        // flagBindZzd has a default value: -1
        flagBindZzd: '-1',
        // flagForbidden has a default value: -1
        flagForbidden: '-1',

        // page has a default value: 1
        page: '1',

        // size has a default value: 10
        size: '10',
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 批量获取用户详情 POST /sysUser/getByUidList */
export async function getByUidListUsingPost(
  body: number[],
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityListSysUserDetailVO_>(
    `/api/sysUser/getByUidList`,
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

/** 根据登录状态获取用户信息 POST /sysUser/getUserInfo */
export async function getUserInfoUsingPost(options?: { [key: string]: any }) {
  return request<API.ResponseEntitySysUserVO_>(`/api/sysUser/getUserInfo`, {
    method: 'POST',
    ...(options || {}),
  });
}

/** 用户账号密码登录 POST /sysUser/login */
export async function loginUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.loginUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntitySysUserVO_>(`/api/sysUser/login`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 用户登录(手机验证码) POST /sysUser/loginByMobile */
export async function loginByMobileUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.loginByMobileUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntitySysUserVO_>(`/api/sysUser/loginByMobile`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 用户手机号免密登录(配合移动端修改) POST /sysUser/loginPasswordFreeByMobile */
export async function loginPasswordFreeByMobileUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.loginPasswordFreeByMobileUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntitySysUserVO_>(
    `/api/sysUser/loginPasswordFreeByMobile`,
    {
      method: 'POST',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 用户单点登录 POST /sysUser/loginSignature */
export async function loginSignatureUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.loginSignatureUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntitySysUserVO_>(`/api/sysUser/loginSignature`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 退出登陆 GET /sysUser/logout */
export async function logoutUsingGet(options?: { [key: string]: any }) {
  return request<API.ResponseEntityString_>(`/api/sysUser/logout`, {
    method: 'GET',
    ...(options || {}),
  });
}

/** 用户密码定期更新检查 GET /sysUser/pwdRegularCheck */
export async function pwdRegularCheckUsingGet(options?: {
  [key: string]: any;
}) {
  return request<API.ResponseEntityBoolean_>(`/api/sysUser/pwdRegularCheck`, {
    method: 'GET',
    ...(options || {}),
  });
}

/** 一键登录 POST /sysUser/quickLogin */
export async function quickLoginUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.quickLoginUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntitySysUserVO_>(`/api/sysUser/quickLogin`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 重置密码 POST /sysUser/resetPwd */
export async function resetPwdUsingPost(
  body: number[],
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityString_>(`/api/sysUser/resetPwd`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新用户信息 POST /sysUser/update */
export async function updateUsingPost2(
  body: API.SysUserDTO,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityString_>(`/api/sysUser/update`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取手机验证码 POST /sysUser/verifyCode */
export async function getVerificationCodeUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getVerificationCodeUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.ResponseEntityString_>(`/api/sysUser/verifyCode`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
