<template>
  <div class>
    <Logo />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu></el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
import Logo from './Logo'
export default {
  components: {
    Logo
  },
  data() {
    return {}
  }
}
</script>