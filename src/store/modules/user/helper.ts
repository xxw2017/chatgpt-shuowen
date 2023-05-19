/*
 * @Author: mjjh
 * @LastEditTime: 2023-04-16 19:18:06
 * @FilePath: \chagpt-shuowen\src\store\modules\user\helper.ts
 * @Description:
 */
import { ss } from '@/utils/storage'

const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  description: string
  id: string
  email: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: 'https://inews.gtimg.com/newsapp_bt/0/13236651963/1000',
      name: '熊十三',
      description: '一个有趣的灵魂',
      id: '',
      email: '',
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
