import { COMMON } from './constants'

export function getRedisKey(key: string) {
  return COMMON.APP_NAME + '_' + key
}
