import { asyncRouterMap, constantRouterMap } from '@/config/router.config'
// import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'
import Vue from 'vue'
import VueRouter from 'vue-router'
// NProgress.configure({showSpinner: false})


// hack router push callback
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

  const routes = [
    ...constantRouterMap,
    ...asyncRouterMap,
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})
export default router
