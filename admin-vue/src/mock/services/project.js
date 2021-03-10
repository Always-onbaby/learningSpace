import Mock from 'mockjs2'
import { builder, getBody } from '../util'

const totalCount = 5701
const phoneCallList = (options) => {
  let _list = [1,2,3,4,5,6,7,8,9,0]
  let result = []
  result = _list.map(item => {
    return {
      key: Mock.mock('@id'),
      author:Mock.mock('@cname'),
      callNo:Mock.mock('@integer(0, 999)'),
    }
  })
  return builder(result)
}
const list = (options) => {
  const body = getBody(options)
  let result = []
  let {pageNo,pageSize} = body
  // let key = (pageNo - 1) * pageSize
  let totalPage = Math.ceil(totalCount / pageSize)
  let next = (pageNo >= totalCount ? (totalCount % pageSize) : pageSize) + 1
  // let statusList = ['']
  for (let i = 1; i < next; i++) {
    const tmpKey = i
    result.push({
      id: Mock.mock('@id'),
      author: Mock.mock('@cname'),
      // customerStatus: Mock.mock('@integer(1, 4)'),
      projectName: Mock.Random.ctitle(4,10),
      customerName: Mock.mock('@cname'),
      projectCity: Mock.mock('@city(true)'),
      projectNo: Mock.mock('@natural(10000)'),
      projectReqNumber:  Mock.mock('@integer(0, 999)'),
      projectCandidate:  Mock.mock('@integer(0, 10)'),
      projectFoundCount:  Mock.mock('@integer(0, 10)'),
      projectRecommendCount:  Mock.mock('@integer(0, 10)'),
      projectEffectiveRecommendCount:  Mock.mock('@integer(0, 10)'),
      projectInterviewCount:  Mock.mock('@integer(0, 10)'),
      projectBackCount:  Mock.mock('@integer(0, 10)'),
      projectOfferCount:  Mock.mock('@integer(0, 10)'),
      projectEntryCount:  Mock.mock('@integer(0, 10)'),
      projectPayCount:  Mock.mock('@integer(0, 10)'),
      projectMaster: Mock.mock('@cname'),
      projectStarttime: Mock.mock('@date'),
      projectUpdateTime: Mock.mock('@date'),
      projectStatus: Mock.Random.pick(['Live','Pending','Successful','Canceled','Fail']),
    })
  }
  return builder({
    pageNo: pageNo,
    pageSize: pageSize,
    totalCount: totalCount,
    totalPage: totalPage,
    data: result
  })
}

Mock.mock(/\/project\/list/,'get',list)
Mock.mock(/\/project\/phoneCallList/,'get',phoneCallList)