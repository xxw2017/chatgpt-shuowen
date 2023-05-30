/*
 * @Author: mjjh
 * @LastEditTime: 2023-04-16 17:44:19
 * @FilePath: \chagpt-shuowen\src\api\index.ts
 * @Description:
 */
import type { AxiosProgressEvent, GenericAbortSignal } from 'axios'
import { post } from '@/utils/request'
import { useSettingStore } from '@/store'

export function fetchChatAPI<T = any>(
  prompt: string,
  options?: { conversationId?: string; parentMessageId?: string },
  signal?: GenericAbortSignal,
) {
  return post<T>({
    url: '/chat',
    data: { prompt, options },
    signal,
  })
}

export function fetchChatAPIProcess<T = any>(
  params: {
    prompt: string
    options?: { conversationId?: string; parentMessageId?: string }
    signal?: GenericAbortSignal
    onDownloadProgress?: (progressEvent: AxiosProgressEvent) => void },
) {
  const settingStore = useSettingStore()
  const data: Record<string, any> = {
    prompt: params.prompt,
    options: params.options,
    systemMessage: settingStore.systemMessage,
    temperature: settingStore.temperature,
    top_p: settingStore.top_p,
  }

  return post<T>({
    url: '/chat_message/send',
    data,
    signal: params.signal,
    onDownloadProgress: params.onDownloadProgress,
  })
}
