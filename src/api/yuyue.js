import request from '@/utils/request'
import BASE_URL from '@/api/base'

export function getMyYuyue(obj) {
  return request({
    url: BASE_URL + 'yuyue/getMyYuyue',
    method: 'POST',
    data: obj
  })
}

export function getAllMyYuyue() {
  return request({
    url: BASE_URL + 'yuyue/getAllMyYuyue',
    method: 'GET'
  })
}

