/* eslint-disable */
// 该文件由 OneAPI 自动生成，请勿手动修改！

declare namespace API {
  interface PageInfo {
    /**
     1 */
    current?: number;
    pageSize?: number;
    total?: number;
    list?: Array<Record<string, any>>;
  }

  interface Result {
    success?: boolean;
    code?: number;
    message?: string;
    data?: Record<string, any>;
  }

  interface PageInfo_UserInfo_ {
    /**
     1 */
    current?: number;
    pageSize?: number;
    total?: number;
    list?: Array<UserInfo>;
  }

  interface Result_PageInfo_UserInfo__ {
    success?: boolean;
    errorMessage?: string;
    data?: PageInfo_UserInfo_;
  }

  interface Result_UserInfo_ {
    success?: boolean;
    errorMessage?: string;
    data?: UserInfo;
  }

  interface Result_string_ {
    success?: boolean;
    errorMessage?: string;
    data?: string;
  }

  type UserGenderEnum = 'MALE' | 'FEMALE';

  interface UserInfo {
    id?: string;
    name?: string;
    /** nick */
    nickName?: string;
    /** email */
    email?: string;
    gender?: UserGenderEnum;
  }

  interface UserInfoVO {
    name?: string;
    /** nick */
    nickName?: string;
    /** email */
    email?: string;
  }

  interface Topic {
    id?: number;
    title?: string;
    description?: string;
    points?: string;
    materials?: Material[];
  }

  interface Result_Topic_ {
    success?: boolean;
    code?: number;
    message?: string;
    data?: Topic;
  }

  interface PageInfo_Topic_ {
    /**
     1 */
    page?: number;
    page_size?: number;
    total?: number;
    list?: Array<Topic>;
  }

  interface Result_PageInfo_Topic__ {
    success?: boolean;
    code?: number;
    message?: string;
    data?: PageInfo_Topic_;
  }

  interface Material {
    id?: number;
    topic_id?: number;
    title?: string;
    content?: string;
    flag_primary?: number;
    status?: string;
    create_at?: string;
    update_at?: string;
  }

  interface Result_Material_ {
    success?: boolean;
    code?: number;
    message?: string;
    data?: Material;
  }

  type definitions_0 = null;
}
