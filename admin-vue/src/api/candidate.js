import request from '@/utils/request'
const candidateApi = {
  candidateList: '/candidate/list'
}

export function getCandidateList (parameter) {
  return request({
    url: candidateApi.candidateList,
    method: 'get',
    data: parameter,
  })
}