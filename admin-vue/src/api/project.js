import request from '@/utils/request'
const projectApi = {
  proList: '/project/list',
  callNums: 'project/phoneCallList'
}

export function getProjectList (parameter) {
  return request({
    url: projectApi.proList,
    method: 'get',
    data: parameter,
  })
}
export function getPhoneCallList (parameter) {
  return request({
    url: projectApi.callNums,
    method: 'get',
    data: parameter,
  })
}