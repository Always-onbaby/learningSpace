<template>
  <div class="home">
    {{msg | moment}}

    <el-button type="primary" @click="handleLogout">退出</el-button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      msg: new Date()
    }
  },
  methods: {
    handleLogout() {
      this.$store.dispatch('Logout').then(() => {}).catch((error) => {
        console.log(error)
      })
    }
  },
  mounted() {
    // localStorage.setItem('Access-Token','Access-Token')
  }
}
</script>
