import Mock from 'mockjs2'
import { builder, getBody } from '../util'

const industryList = (options) => {
  const body = getBody(options)
  console.log(body)
  let result = []
  for (let i = 1; i < 100; i++) {
    result.push({
      id: Mock.mock('@id'),
      name: Mock.mock('@ctitle()')
    })
  }
  return builder({
    data: result
  })
}

const positionList = (options) => {
  const body = getBody(options)
  console.log(body)
  let result = []
  for (let i = 1; i < 100; i++) {
    result.push({
      id: Mock.mock('@id'),
      name: Mock.mock('@ctitle()')
    })
  }
  return builder({
    data: result
  })
}

const customerList = (options) => {
  const body = getBody(options)
  console.log(body)
  let result = []
  for (let i = 1; i < 100; i++) {
    result.push({
      id: Mock.mock('@id'),
      cusName: Mock.mock('@ctitle()'),
      liker: Mock.mock('@ctitle(1,2)'),
      cusShortName: Mock.mock('@ctitle()'),
      bdAchieve: Mock.mock({
        "number|1-100": 100
      }),
      bdId: Mock.mock('@id'),
      bdName: Mock.mock('@ctitle()'),
      email: Mock.mock('@email'),
      liker: Mock.mock('@cword'),
      status: Mock.mock({
        'regexp': /\d{1,10}/
      }),
      tel: Mock.mock('@integer()'),
    })
  }
  return builder({
    data: result
  })
}
Mock.mock(/\/system\/sysIndustry/, 'get', industryList)
Mock.mock(/\/system\/sysPosition/, 'get', positionList)
Mock.mock(/\/system\/sysCustomer/, 'get', customerList)