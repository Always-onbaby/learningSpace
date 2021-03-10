<template>
  <div :class="['sidebar-logo-container', collapse && 'collapse']"></div>
</template>
<script>
import logoImg from '@/assets/logo/logo.png'
export default {
  name: 'SidebarLogo',
  props: {
    collapse: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      title: 'admin',
      logo: logoImg
    }
  }
}
</script>