import Mock from 'mockjs2'
import { builder, getBody } from '../util'

const totalCount = 5701

const list = (options) => {
  const body = getBody(options)
  let result = []
  let {pageNo,pageSize} = body
  let totalPage = Math.ceil(totalCount / pageSize)
  let next = (pageNo >= totalCount ? (totalCount % pageSize) : pageSize) + 1
  for (let i = 1; i < next; i++) {
    result.push({
      id: Mock.mock('@id'),
      customerStatus: Mock.mock('@integer(1, 4)'),
      notes: Mock.mock('@integer(1,100)'),
      // personName: Mock.Random.ctitle(4,10),
      circleUrl: 'https://image0.lietou-static.com/tiny/55557f3b28ee44a8919620ce01a.gif',
      personduty: Mock.Random.ctitle(4,10),
      personName: Mock.mock('@cname'),
      customerProperty: Mock.Random.pick(['foreign','state_owned','joint_ventrue','private','']),
      customerProCount: Mock.mock('@integer(1, 999)'),
      customerCity: Mock.mock('@city(true)'),
      cusNo: Mock.mock('@natural(10000)'),
      customerIndustry: `${Mock.mock('@ctitle()')} / ${Mock.mock('@ctitle()')}`
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

Mock.mock(/\/candidate\/list/,'get',list)