<template>
  <header class="ant-layout-header">
    <div class="ant-pro-global-header">
      <span class="ant-pro-global-header-trigger">
        <i class="el-icon-s-fold"></i>
      </span>
      <div class="ant-pro-global-header-index-right">
        <el-image class="avatar" :src="avatar" fit="cover"></el-image>
      </div>
    </div>
  </header>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['nickname', 'avatar']),
  },
}
</script>
<style lang="less" scoped>
.ant-layout-header {
  z-index: 9;
  width: 100%;
  .ant-pro-global-header {
    position: relative;
    height: 64px;
    padding: 0;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    display: flex;
    justify-content: space-between;
    .ant-pro-global-header-trigger {
      height: 64px;
      padding: 19px 24px;
      font-size: 20px;
      cursor: pointer;
      transition: all 0.3s, padding 0s;
    }
    .ant-pro-global-header-index-right {
      margin-right: 24px;
      display: flex;
      align-items: center;
      .avatar {
        border-radius: 100%;
        width: 30px;
        height: 30px;
        cursor: pointer;
      }
    }
  }
}
</style>