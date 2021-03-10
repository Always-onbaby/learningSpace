import { asyncRouterMap, constantRouterMap } from '@/config/router.config';
/**
 * 过滤账户是否拥有某一个权限，并将菜单从加载列表中移除
 * @param {*} permission 
 * @param {*} route
 * @returns {boolean}
 */
function hasPermission(permission, route) {
  if (route.meta && route.meta.permission) {
    let flags = false;
    for (let i = 0, len = permissions.length; i < len; i++) {
      flags = router.meta.permission.includes(permission[i])
      if (flags) {
        return true
      }
    }
    return false
  }
  return true
}

function filterAsyncRouter(routerMap,roles) {
  const accessedRouters = routerMap.filter(route => {
    if (hasPermission(roles.permissionList, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, roles)
      }
      return true
    }
    return false
  })
  return accessedRouters
}
const state = {
  routers: constantRouterMap,
  addRouters: []
}

const mutations = {
  SET_ROUTERS: (state, routers) => {
    state.addRouters = routers
    state.routers = constantRouterMap.concat(routers)
  }
}

const actions = {
  GenerateRoutes({ commit }, data) {
    return new Promise(resolve => {
      // const { roles } = data
      // const accessedRouters = filterAsyncRouter(asyncRouterMap, roles)
      // commit('SET_ROUTERS', accessedRouters)
      commit('SET_ROUTERS', asyncRouterMap)
      resolve()
    })
  }
}

const getters = {
  addRouters: state => state.addRouters
}

export default {
  state,
  mutations,
  actions,
  getters
}