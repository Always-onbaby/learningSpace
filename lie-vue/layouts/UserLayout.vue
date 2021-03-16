<template>
  <div :class="['user-layout-wrapper']">
    <div class="container">
      <div class="top"></div>
      <router-view></router-view>
      <div class="footer">
        <div class="links">
          <a href="_self">帮助</a>
          <a href="_self">隐私</a>
          <a href="_self">条款</a>
        </div>
        <div class="copyright">Copyright &copy; 2018 vueComponent</div>
      </div>
    </div>
  </div>
</template>
<script>
import { deviceMixin } from '@/store/device-mixin'
export default {
  name: 'UserLayout',
  mixins: [deviceMixin],
  mounted() {
    document.body.classList.add('userLayout')
  },
  beforeDestroy() {
    document.body.classList.remove('userLayout')
  },
}
</script>
<style lang="less" scoped>
.footer {
  text-align: center;
  .links {
    padding:  20px 0;
  }
  .copyright {
    font-size: 12px;
  }
}
</style>