import request from '@/utils/request'
import BASE_URL from '@/api/base'

export function getAll() {
  return request({
    url: BASE_URL + 'loupan/getAll',
    method: 'GET'
  })
}

export function deleteById(id) {
  return request({
    url: BASE_URL + 'loupan/deleteById',
    method: 'GET',
    params: {
      id
    }
  })
}

export function getById(id) {
  return request({
    url: BASE_URL + 'loupan/getById',
    method: 'GET',
    params: {
      id
    }
  })
}

export function saveLoupan(obj) {
  return request({
    url: BASE_URL + 'loupan/save',
    method: 'POST',
    data: obj
  })
}
export function updateLoupan(obj) {
  return request({
    url: BASE_URL + 'loupan/update',
    method: 'POST',
    data: obj
  })
}
