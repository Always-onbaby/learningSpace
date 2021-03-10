import request from '@/utils/request'
const customerApi = {
  cusList: '/customer/list'
}

export function getCustomerList (parameter) {
  return request({
    url: customerApi.cusList,
    method: 'get',
    data: parameter,
  })
}