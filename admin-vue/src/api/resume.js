import request from '@/utils/request'
const resumeApi = {
  resumeList: '/resume/list',
}

export function getResumeList (parameter) {
  return request({
    url: resumeApi.resumeList,
    method: 'get',
    data: parameter,
  })
}