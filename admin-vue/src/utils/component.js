import Vue from 'vue';

const requireComponent = require.context('../components/base', false, /\.(vue|js)$/)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  // console.log(componentConfig)
  Vue.component(componentConfig.default.name, componentConfig.default || componentConfig)
})