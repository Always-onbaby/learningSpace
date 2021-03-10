import { BasicLayout, UserLayout } from '@/layouts'

const RouteView = {
  name: 'RouteView',
  render: (h) => h('router-view')
}

export const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: '主页' },
    redirect: '/account/performance',
    children: [
      // 数据看板页面
      {
        path: '/dashboard',
        name: 'dashboard',
        redirect: '/dashboard/workplace',
        component: RouteView,
        meta: { title: '数据看板', keepAlive: true, icon: 'el-icon-bank-card', permission: ['dashboard'] },
        children: [
          {
            path: '/dashboard/analysis',
            name: 'Analysis',
            component: () => import('@/views/dashboard/analysis/Analysis'),
            meta: { title: '分析页', keepAlive: false, permission: ['dashboard'] }
          },
          // 外部链接
          {
            path: '/dashboard/watchplace',
            name: 'Monitor',
            component: () => import('@/views/dashboard/watchplace/Watchplace'),
            meta: { title: '监控页', target: '_blank' }
          },
          {
            path: '/dashboard/workplace',
            name: 'Workplace',
            component: () => import('@/views/dashboard/workplace/Workplace'),
            meta: { title: '工作台', keepAlive: true, permission: ['dashboard'] }
          }
        ]
      },
      // 列表管理页面
      {
        path: '/list',
        name: 'list',
        component: RouteView,
        redirect: '/list/customer-list',
        meta: { title: '列表管理', icon: 'el-icon-price-tag', permission: ['list'] },
        children: [
          {
            path: '/list/customer-list',
            name: 'customerList',
            component: () => import('@/views/list/customer/Customer'),
            meta: { title: '客户管理', keepAlive: true, permission: ['list'] }
          },
          {
            path: '/list/candidate-list',
            name: 'candidateList',
            component: () => import('@/views/list/candidate/Candidate'),
            meta: { title: '候选人管理', keepAlive: true, permission: ['list'] }
          },
          {
            path: '/list/project-list',
            name: 'projectList',
            component: () => import('@/views/list/project/Project'),
            meta: { title: '职位管理', keepAlive: true, permission: ['list'] }
          },
        ]
      },
      // 简历管理页面
      {
        path: '/resume',
        name: 'resume',
        component: RouteView,
        redirect: '/resume/base-list',
        meta: { title: '简历管理', icon: 'el-icon-present', permission: ['resume'] },
        children: [
          {
            path: '/resume/base-list',
            name: 'baseList',
            component: () => import('@/views/resume/baseList/BaseList'),
            meta: { title: '简历管理', keepAlive: true, permission: ['resume'] }
          },
          {
            path: '/resume/mapping-list',
            name: 'mappingList',
            component: () => import('@/views/resume/mappingList/MappingList'),
            meta: { title: '简历Mapping', keepAlive: true, permission: ['resume'] }
          },
        ]
      },
      // 报表管理页面
      {
        path: '/report',
        name: 'report',
        component: RouteView,
        redirect: '/report/staff-report',
        meta: { title: '统计报表', icon: 'el-icon-set-up', permission: ['report'] },
        children: [
          {
            path: '/report/staff-report',
            name: 'staffReport',
            component: () => import('@/views/report/staffReport/StaffReport'),
            meta: { title: '员工行为统计表', keepAlive: true, permission: ['report'] }
          },
          {
            path: '/report/resume-report',
            name: 'resumeReport',
            component: () => import('@/views/report/resumeReport/ResumeReport'),
            meta: { title: '候选人进程表', keepAlive: true, permission: ['report'] }
          },
          {
            path: '/report/project-report',
            name: 'projectReport',
            component: () => import('@/views/report/projectReport/ProjectReport'),
            meta: { title: '职位进程表', keepAlive: true, permission: ['report'] }
          },
          {
            path: '/report/performance-report',
            name: 'performanceReport',
            component: () => import('@/views/report/performanceReport/PerformanceReport'),
            meta: { title: '绩效报表', keepAlive: true, permission: ['report'] }
          },
          {
            path: '/report/payment-report',
            name: 'paymentReport',
            component: () => import('@/views/report/paymentReport/PaymentReport'),
            meta: { title: '回款表报', keepAlive: true, permission: ['report'] }
          },
          {
            path: '/report/resume-upload-report',
            name: 'resumeUploadReport',
            component: () => import('@/views/report/resumeUploadReport/ResumeUploadReport'),
            meta: { title: '简历录入报表', keepAlive: true, permission: ['report'] }
          },
          {
            path: '/report/offer-report',
            name: 'offerReport',
            component: () => import('@/views/report/offerReport/OfferReport'),
            meta: { title: 'offer统计报表', keepAlive: true, permission: ['report'] }
          },
          {
            path: '/report/callrecord-report',
            name: 'callrecordReport',
            component: () => import('@/views/report/callrecordReport/CallrecordReport'),
            meta: { title: '通话记录报表', keepAlive: true, permission: ['report'] }
          },
          {
            path: '/report/invoice-apply-report',
            name: 'invoiceApplyReport',
            component: () => import('@/views/report/invoiceApplyReport/InvoiceApplyReport'),
            meta: { title: '发票申请表', keepAlive: true, permission: ['report'] }
          },
        ]
      },
      // 个人中心
      {
        path: '/account',
        name: 'account',
        component: RouteView,
        redirect: '/account/center',
        meta: { title: '个人中心', icon: 'el-icon-setting', keepAlive: true, permission: ['user'] },
        children: [
          {
            path: '/account/information',
            name: 'information',
            component: () => import('@/views/account/information'),
            meta: { title: '个人信息', keepAlive: true, permission: ['user'] }
          },
          {
            path: '/account/performance',
            name: 'performance',
            component: () => import('@/views/account/performance'),
            meta: { title: '绩效考核', keepAlive: true, permission: ['user'] }
          },
          {
            path: '/account/commission',
            name: 'commission',
            component: () => import('@/views/account/commission'),
            meta: { title: '佣金信息', keepAlive: true, permission: ['user'] }
          },
          {
            path: '/account/companyInformation',
            name: 'companyInformation',
            component: () => import('@/views/account/companyInformation'),
            meta: { title: '公司信息', keepAlive: true, permission: ['user'] }
          },
          {
            path: '/account/companyManagement',
            name: 'companyManagement',
            component: () => import('@/views/account/companyManagement'),
            meta: { title: '组织管理', keepAlive: true, permission: ['user'] }
          },
          {
            path: '/account/systemSettings',
            name: 'systemSettings',
            component: () => import('@/views/account/systemSettings'),
            meta: { title: '系统设置', keepAlive: true, permission: ['user'] }
          },
          {
            path: '/account/systemNotification',
            name: 'systemNotification',
            component: () => import('@/views/account/systemNotification'),
            meta: { title: '系统通知', keepAlive: true, permission: ['user'] }
          },
        ]
      },
      // 基础 demo 展示
      {
        path: '/demo',
        path: '/demo',
        name: 'demo',
        component: RouteView,
        redirect: '/demo/center',
        meta: { title: '后台管理', icon: 'el-icon-setting', keepAlive: true, permission: ['user'] },
        children: [
          {
            path: '/demo/center',
            name: 'demoCenter',
            component: () => import('@/views/demo/center'),
            meta: { title: 'OA审批管理后台', keepAlive: true, permission: ['user'] }
          },
        ]
      }
    ],
  },
]
/**
 * 基础理由
 * @type {*[]}
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      },
    ]
  },
  {
    path: '/demo/build',
    component: () => import('@/views/demo/build'),
    hidden: true,
  }
]