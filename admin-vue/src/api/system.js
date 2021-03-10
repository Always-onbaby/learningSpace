import request from '@/utils/request'
const systemApi = {
  sysIndustry: '/system/sysIndustry',
  sysPosition: '/system/sysPosition',
  sysCustomer: '/system/sysCustomer',
}

export const sysIndustry =  (parameter) => {
  return request({
    url: systemApi.sysIndustry,
    method: 'get',
    data: parameter,
  })
}

export const sysPosition = (parameter) => {
  return request({
    url: systemApi.sysPosition,
    method: 'get',
    data: parameter,
  })
}

export const sysCustomer = (parameter) => {
  return request({
    url: systemApi.sysCustomer,
    method: 'get',
    data: parameter,
  })
}