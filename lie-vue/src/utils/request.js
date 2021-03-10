import store from '@/store'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import axios from 'axios'
import { Notification } from 'element-ui'


// 创建axios实例
const request = axios.create({
  // 默认请求路径前缀
  baseURL: process.env.VUE_APP_API_BASE_URL,
  // 超时时间
  timeout: 6000
})
// 异常拦截处理
const errorHandler = (error) => {
  console.log(error.response.status)
  if(error.response) {
    const data = error.response.data
    // 从localstorage获取token
    const token = localStorage.getItem(ACCESS_TOKEN)
    if(error.response.status === 403) {
      Notification({
        title: '错误',
        message: data.message,
        type: 'error'
      })
    }
    if(error.response.status === 401) {
      if(token) {
        store.dispatch('Logout').then(() => {
          setTimeout(() => {
            window.location.reload()
          }, 1500)
        })
      }
    }
  }
  return Promise.reject(error)
}

request.interceptors.request.use(config => {
  const token = localStorage.getItem(ACCESS_TOKEN)
  if(token) {
    config.headers['Access-Token'] = token
  }
  return config
},errorHandler)


request.interceptors.response.use(response => {
  return response.data
},errorHandler)

export default request