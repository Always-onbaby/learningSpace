<template>
  <div class="main">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="账号">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
        <el-button @click="out">登出</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import md5 from 'md5'
import { mapActions } from 'vuex'
import { timeFix } from '@/utils/util'
export default {
  data() {
    return {
      form: {
        username: 'admin',
        password: 'admin'
      }
    }
  },
  methods: {
    ...mapActions(['Login','Logout']),
    onSubmit() {
      let params = { ...this.form }
      params.password = md5(params.password)
      this.Login(params).then(res => {
        this.loginSuccess()
        // console.log(res)
      }).catch((error) => {
        console.log(error)
      })
    },
    out() {
      this.Logout().then((res) => {
        console.log(res)
      }).catch((error) => {
        console.log(error)
      })
    },
    loginSuccess() {
      this.$router.push({path: '/'})
      setTimeout(() => {
        this.$notify.success({
          title: '欢迎',
          message: `${timeFix()}，欢迎回来`
        },1000)
      })
    }
  }
}
</script>