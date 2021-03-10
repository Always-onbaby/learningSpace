<template>
  <div class="main">
    <el-form ref="formLogin" :model="form" label-width="100px" :rules="rules">
      <el-form-item label="账号">
        <el-input v-model="form.username" @keyup.enter.native="handleLogin"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" @keyup.enter.native="handleLogin"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleLogin" :loading="btnLoading">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import { timeFix } from '@/utils/util'
import md5 from 'js-md5'
export default {
  data() {
    return {
      form: {
        username: 'admin',
        pass: '',
      },
      rules: {},
      btnLoading: false
    }
  },
  methods: {
    ...mapActions(['Login']),
    handleLogin() {
      const { Login,form } = this
      this.$refs['formLogin'].validate((valid) => {
        if (valid) {
          let params = {
            username: form.username,
            password: md5(form.password),
          }
          this.btnLoading = true
          Login(params).then(() => {
            this.btnLoading = false
            this.$router.push('/')
            // 延迟1S显示欢迎页
            setTimeout(() => {
              this.$notify({
                title: '提示',
                type: 'success',
                message: `${timeFix()},，欢迎回来`
              })
            })
          }).catch(() => {
            this.btnLoading = false
          })
        }
      })
    },
  },
}
</script>
<style lang="less" scoped>
.main {
  width: 675px;
  padding-top: 20px;
  margin: 0 auto;
}
</style>