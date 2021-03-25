import request from '@/utils/request'
import BASE_URL from '@/api/base'

export function getAll() {
  return request({
    url: BASE_URL + 'notice/getAll',
    method: 'GET'
  })
}
