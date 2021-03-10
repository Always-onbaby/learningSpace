
import { ACCESS_TOKEN } from '@/store/mutation-types'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import router from './router'
import store from './store'

NProgress.configure({ showSpinner: false }) // NProgress Configuration


const whiteList = ['login', 'register', 'registerResult'] // no redirect whitelist
const loginRoutePath = '/user/login'
const defaultRoutePath = '/dashboard/workplace'

router.beforeEach((to, from, next) => {
  // console.log(to)
  NProgress.start()
  /**has token */
  if (localStorage.getItem(ACCESS_TOKEN)) {
    if (to.path === loginRoutePath) {
      next({ path: defaultRoutePath })
      NProgress.done()
    } else {
      store.dispatch('GetInfo').then(() => { })
      store.dispatch('GenerateRoutes', {}).then(() => {
        // router.addRoutes(store.getters.addRouters)
        // 请求带有 redirect 重定向时，登录自动重定向到该地址
        // const redirect = decodeURIComponent(from.query.redirect || to.path)
        // if (to.path === redirect) {
        //   // set the replace: true so the navigation will not leave a history record
        //   next({ ...to, replace: true })
        // } else {
        //   // 跳转到目的路由
        //   next({ path: redirect })
        // }
        // console.log(store.getters.addRouters)
      })
    }
    next()
    // next({path: to.path})
  } else {
    if (whiteList.includes(to.name)) {
      next()
    } else {
      next({ path: loginRoutePath, query: { redirect: to.fullPath } })
      NProgress.done()
    }
  }
  // console.log(localStorage.getItem(ACCESS_TOKEN))
  // next()
})
router.afterEach(() => {
  NProgress.done()
})