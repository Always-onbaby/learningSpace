<template>
  <aside class="layout-sider">
    <!-- <el-scrollbar wrap-class="scrollbar-wrapper"> -->
    <div class="sider-menu-logo">
        <img src="/logo.png" alt="">
      <!-- <h1>
      </h1> -->
    </div>
    <el-menu
      :default-active="activeMenu"
      class
      :mode="asideMode"
      @select="handleSelect"
      router
      background-color="#304156"
      text-color="rgb(191, 203, 217)"
      active-text-color="#1890ff"
      unique-opened
    >
      <template v-for="route of menus">
        <el-submenu :index="route.path" :key="route.path">
          <template slot="title">
            <i class="el-icon-location"></i>
            <!-- <i :class="route.meta.icon"></i> -->
            {{route.meta.title}}</template>
          <el-menu-item
            :index="item.path"
            v-for="item of route.children"
            :key="item.path"
          >{{item.meta.title}}</el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
    <!-- </el-scrollbar> -->
  </aside>
</template>
<script>
import { mapState } from 'vuex'
import { SIDEBAR_TYPE, TOGGLE_MOBILE_TYPE } from '@/store/mutation-types'
export default {
  components: {},
  computed: {
    ...mapState({
      mainMenu: (state) => state.permission.addRouters,
    }),
    activeMenu() {
      const { meta, path } = this.$route
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
  },
  created() {
    let routes = this.mainMenu.find((item) => item.path === '/')
    this.menus = (routes && routes.children) || []
    this.$watch('collapsed', () => {
      this.$store.commit(SIDEBAR_TYPE, this.collapsed)
    })
    // console.log(this.menus)
  },
  data() {
    return {
      menus: [],
      // 侧栏收起状态
      collapsed: false,
      // activeIndex: '1',
      asideMode: 'vertical',
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath)
    },
  },
}
</script>
<style lang="less" scoped>
.sider-menu-logo {
  position: relative;
  height: 64px;
  // padding-left: 24px;
  overflow: hidden;
  transition: all 0.3s;
  line-height: 64px;
  background: #304156;
  padding: 20px;
  img {
    width: 100%;
    height: 100%;
    display: flex;
    object-fit: scale-down;
  }
  h1 {
    color: #fff;
    font-size: 20px;
    margin: 0 0 0 12px;
    font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
    font-weight: 600;
    vertical-align: middle;
  }
}
.layout-sider {
  background-color: #304156;
  position: relative;
  transition: all 0.2s;
  flex: 0 0 200px;
  max-width: 200px;
  min-width: 200px;
  width: 200px;
  min-height: 100vh;
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
  z-index: 100;
  .el-menu {
    border-right: 0;
  }
  // .el-menu-item {
  //   &.is-active {
  //     background-color: rgb(82, 196, 26) !important;
  //     color: #fff !important;
  //   }
  // }
}
</style>