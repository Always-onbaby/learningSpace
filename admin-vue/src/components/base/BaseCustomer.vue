<template>
  <el-select
    v-model="customer"
    placeholder="请选择客户"
    @visible-change="visibleChange"
    loading-text="数据加载中..."
    :loading="loading"
  >
    <el-option :label="item.cusName" :value="item.id" v-for="item of list" :key="item.id"></el-option>
  </el-select>
</template>
<script>
import { sysCustomer } from '@/api/system'
export default {
  name: 'BaseCustomer',
  data() {
    return {
      customer: '',
      list: [],
      loading: false,
    }
  },
  created() {},
  methods: {
    visibleChange(visible) {
      if (visible && this.list.length === 0 && !this.loading) {
        this.loading = true
        sysCustomer()
          .then((res) => {
            this.list = res.result.data
            this.loading = false
          })
          .catch(() => {
            this.loading = false
          })
      }
    },
  },
}
</script>
<style lang="less" scoped>
</style>