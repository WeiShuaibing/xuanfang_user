import request from '@/utils/request'
import BASE_URL from '@/api/base'

export function getMyYuyue(obj) {
  return request({
    url: BASE_URL + 'yuyue/getMyYuyue',
    method: 'POST',
    data: obj
  })
}

