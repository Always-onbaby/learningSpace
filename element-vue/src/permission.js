import '@/components/NProgress/nprogress.less' // progress bar custom style
import { ACCESS_TOKEN } from '@/store/mutation-types'
import { Notification } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import storage from 'store'
import router from './router'
import store from './store'


NProgress.configure({ showSpinner: false })

const whiteList = ['login', 'register', 'registerResult']
const loginRoutePath = '/user/login'
const defaultRoutePath = '/dashboard/workplace'

// store.dispatch('GenerateRoutes', {}).then(() => {
//   router.addRoutes(store.getters.addRouters)
// })
router.beforeEach((to, from, next) => {
  console.log('1')
  NProgress.start()
  if (storage.get(ACCESS_TOKEN)) {
    if (to.path === loginRoutePath) {
      next({ path: defaultRoutePath })
      NProgress.done()
    } else {
      // check login user.roles is null
      if (store.getters.roles.length === 0) {
        store.dispatch('GetInfo').then(res => {
          const roles = res.result && res.result.role
          store.dispatch('GenerateRoutes', { roles }).then(() => {
            router.addRoutes(store.getters.addRouters)
            const redirect = decodeURIComponent(from.query.redirect || to.path)
            if (to.path === redirect) {
              // set the replace: true so the navigation will not leave a history record
              next({ ...to, replace: true })
            } else {
              // 跳转到目的路由
              next({ path: redirect })
            }
          })
        }).catch(() => {
          Notification.error({
            title: '错误',
            message: '请求用户信息失败，请重试'
          })
          store.dispatch('Logout').then(() => {
            next({ path: loginRoutePath, query: { redirect: to.fullPath } })
          })
        })
        next()
      } else {
        next()
      }
    }
  } else {
    if (whiteList.includes(to.name)) {
      next()
    } else {
      next({ path: loginRoutePath, query: { redirect: to.fullPath } })
      NProgress.done()
    }
  }
})
router.afterEach(() => {
  NProgress.done()
})