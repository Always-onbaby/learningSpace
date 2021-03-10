import Mock from 'mockjs2'
import { builder, getBody } from '../util'

const totalCount = 24577

const list = (options) => {
  const body = getBody(options)
  let result = []
  let {pageNo,pageSize} = body
  let totalPage = Math.ceil(totalCount / pageSize)
  let next = (pageNo >= totalCount ? (totalCount % pageSize) : pageSize) + 1
  for (let i = 1; i < next; i++) {
    result.push({
      englishPersonName: Mock.mock('@name'),  //随机英文名字
      personAge: Mock.mock('@integer(1,110)'), //1-110的随机数字
      noteCount: Mock.mock('@integer(1,110)'), //1-110的随机数字
      personJoinCount: Mock.mock('@integer(1,110)'), //1-110的随机数字
      personEducation: Mock.mock('@integer(0,120)'), //1-110的随机数字
      personCompany: Mock.mock('@csentence(5, 25)'), 
      personDuty: Mock.mock('@csentence(3, 10)'), 
      personLocate: Mock.mock('@city(true)'), 
      personName: Mock.mock('@cname()'), 
      personSex: Mock.mock('@cword(男女)'), 
      personTel: Mock.mock(/^1[3456789]\d{9}$/), 
      personWorkYears:  Mock.mock('@integer(1,60)'), 
      resumeCreator:  Mock.mock('@cname()'), 
      resumeOwner:  Mock.mock('@cname()'), 
      resumeCreatorId:  Mock.mock('@id'), 
      resumeId:  Mock.mock('@id'), 
      resumeOwnerId:  Mock.mock('@id'), 
      resumeFrom:  Mock.mock(/[01]/), 
      workInfo:  Mock.mock({
        title: Mock.mock('@csentence(3,10)'),
        vocation: Mock.mock('@csentence(3,10)'),
        startDate: Mock.mock('@datetime("yyyy-MM-dd")'),
        endDate: Mock.mock('@datetime("yyyy-MM-dd")'),
        company: Mock.mock('@cword(3,10)'),
      }), 
      workStatus:  Mock.mock(/[1234]/),
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

Mock.mock(/\/resume\/list/,'get',list)