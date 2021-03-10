<template>
  <section class="ant-layout ant-layout-has-sider">
    <aside :class="['ant-layout-sider', collapsed && 'ant-layout-sider-collapsed']">
      
    </aside>
    <section class="ant-layout">
      <router-view />
    </section>
  </section>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
    }
  },
}
</script>
<style lang="less" scoped>
@import './BasicLayout.less';
</style>