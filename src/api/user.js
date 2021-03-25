import request from '@/utils/request'
import BASE_URL from '@/api/base'

export function login(data) {
  return request({
    url: BASE_URL + 'user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: BASE_URL + 'user/info',
    method: 'get'
  })
}

export function getAllUser() {
  return request({
    url: BASE_URL + 'user/getAll',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: BASE_URL + 'user/logout',
    method: 'post'
  })
}

export function getPage(pageNum, pageSize) {
  return request({
    url: BASE_URL + 'user/getPage',
    method: 'GET',
    params: {
      pageNum, pageSize
    }
  })
}

export function register(user) {
  return request({
    url: BASE_URL + 'user/register',
    method: 'POST',
    data: user
  })
}

export function deleteById(id) {
  return request({
    url: BASE_URL + 'user/delete',
    method: 'GET',
    params: {
      id
    }
  })
}

export function updateIdcard(idCardUrl) {
  return request({
    url: BASE_URL + 'user/updateIdcard',
    method: 'GET',
    params: {
      idCardUrl
    }
  })
}
export function updateAdviser(userId, adviserId) {
  return request({
    url: BASE_URL + 'user/updateAdviser',
    method: 'POST',
    data: {
      userId, adviserId
    }
  })
}

export function search(pageNum, pageSize, matchStr) {
  return request({
    url: BASE_URL + 'user/search',
    method: 'GET',
    params: {
      pageNum,
      pageSize,
      matchStr
    }
  })
}

export function update(user) {
  return request({
    url: BASE_URL + 'user/update',
    method: 'POST',
    data: user
  })
}

export function getById(id) {
  return request({
    url: BASE_URL + 'user/getById',
    method: 'GET',
    params: {
      id
    }
  })
}
export function searchByName(matchStr) {
  return request({
    url: BASE_URL + 'user/searchByName',
    method: 'GET',
    params: {
      matchStr
    }
  })
}
export function yuyueAdviser(obj) {
  return request({
    url: BASE_URL + 'user/yuyueAdviser',
    method: 'POST',
    data: obj
  })
}
