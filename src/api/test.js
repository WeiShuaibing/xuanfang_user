import request from '@/utils/request'
import BASE_URL from '@/api/base'

export function testInfo() {
  return request({
    url: BASE_URL + 'test/info',
    method: 'GET'
  })
}

export function pay() {
  return request({
    url: BASE_URL + 'test/pay',
    method: 'POST',
    data: {
      userId: 123,
      fangyuanId: '345'
    }
  })
}

