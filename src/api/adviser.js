import request from '@/utils/request'
import BASE_URL from '@/api/base'

export function getAll() {
  return request({
    url: BASE_URL + 'adviser/getAll',
    method: 'GET'
  })
}

export function deleteById(id) {
  return request({
    url: BASE_URL + 'adviser/deleteById',
    method: 'GET',
    params: {
      id
    }
  })
}

export function getById(id) {
  return request({
    url: BASE_URL + 'adviser/getById',
    method: 'GET',
    params: {
      id
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
