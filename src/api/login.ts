/*
 * @Author: mjjh
 * @LastEditTime: 2023-04-15 10:58:03
 * @FilePath: \chatgpt-shuowen\src\api\login.ts
 * @Description: 登录 相关接口
 */
import { get, post } from '@/utils/request'
import type { UserInfo } from '@/store/modules/user/helper'

/**
 * @description: 获取用户信息
 * @return {*}
 */
export function getUserInfo<T>() {
  return get<T>({
    url: '/user/info',
  })
}

/**
 * 用户信息保存请求
 */
export interface userInfoModel {
  // 用户昵称
  name: string
  // 头像地址
  avatar: string
  description: string
  id: number
  email: string
}

/**
 * @description: 登录
 * @param {loginModel} data
 * @return {*}
 */
export function updateUserInfo<T>(data: Partial<UserInfo>) {
  return post<T>({
    url: '/user/updateUserInfo',
    data,
  })
}

/**
 * 前端用户登录请求
 */
export interface loginModel {
  // 密码
  password: string
  // 邮箱地址
  username: string
}

/**
 * @description: 登录
 * @param {loginModel} data
 * @return {*}
 */
export function loginEmail<T>(data: loginModel) {
  return post<T>({
    url: '/user/login/email',
    data,
  })
}
