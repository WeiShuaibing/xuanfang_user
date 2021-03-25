import request from '@/utils/request'
import BASE_URL from '@/api/base'

export function add(obj) {
  return request({
    url: BASE_URL + 'collection/add',
    method: 'POST',
    data: obj
  })
}

export function remove(id) {
  return request({
    url: BASE_URL + 'collection/remove',
    method: 'GET',
    params: {
      id
    }
  })
}

export function deleteByFangyuanIdAndUserId(fangyuanId) {
  return request({
    url: BASE_URL + 'collection/deleteByFangyuanIdAndUserId',
    method: 'GET',
    params: {
      fangyuanId
    }
  })
}

export function getMyCollection(userId) {
  return request({
    url: BASE_URL + 'collection/getMyCollection',
    method: 'GET',
    params: {
      userId
    }
  })
}

export function saveAdviser(obj) {
  return request({
    url: BASE_URL + 'adviser/save',
    method: 'POST',
    data: obj
  })
}
export function updateAdviser(obj) {
  return request({
    url: BASE_URL + 'adviser/update',
    method: 'POST',
    data: obj
  })
}
