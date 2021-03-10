<template>
  <section :class="['ant-layout',layout === 'sidemenu' && 'has-sider']">
    <Sidebar class="fix-sider-bar"></Sidebar>
    <section :class="['ant-layout',layout === 'sidemenu' && 'sidemenu']" :style="{'padding-left': '200px'}">
      <BaseHeader></BaseHeader>
      <main class="ant-layout-content ant-pro-basicLayout-content">
        <router-view />
      </main>
      <BaseFooter></BaseFooter>
    </section>
  </section>
</template>
<script>
import Sidebar from './components/Sidebar'
import BaseHeader from './components/BaseHeader'
import BaseFooter from './components/BaseFooter'
export default {
  components: {
    Sidebar,
    BaseHeader,
    BaseFooter
  },
  data() {
    return {
      layout: 'sidemenu',
    }
  },
  methods: {},
}
</script>
<style lang="less" scoped>
.ant-layout {
  display: flex;
  flex-direction: column;
  flex: auto;
  background-color: #f0f2f5;
  width: 100%;
  .fix-sider-bar {
    position: fixed;
    top: 0;
    left: 0;
  }
  .ant-layout-content {
    flex: auto;
    min-height: 0;
  }
  .ant-pro-basicLayout-content {
    position: relative;
    margin: 24px;
    transition: all 0.2s;
  }
  &.has-sider {
    flex-direction: row;
  }
}
</style>