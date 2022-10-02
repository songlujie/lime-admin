import request from '@/utils/request'

/**
 *登录
 */

export const login = (data) => {
  return request({
    url: '1704300/sys/login',
    method: 'POST',
    data
  })
}
