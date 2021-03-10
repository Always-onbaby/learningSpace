import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
import App from './App.vue'
import './global.less'
// mock
// WARNING: `mockjs` NOT SUPPORT `IE` PLEASE DO NOT USE IN `production` ENV.
import './mock'
import './permission'
import router from './router'
import store from './store'
import './utils/component'
import './utils/filter'

Vue.config.productionTip = false

Vue.use(ElementUI,{size: 'small'})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')