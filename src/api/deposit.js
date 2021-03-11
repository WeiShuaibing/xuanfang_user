import request from '@/utils/request'
import BASE_URL from '@/api/base'

export function getAllMyDeposit() {
  return request({
    url: BASE_URL + 'deposit/getAllMyDeposit',
    method: 'GET'
  })
}

