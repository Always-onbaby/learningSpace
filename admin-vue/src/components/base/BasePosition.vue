<template>
  <el-select
    v-model="position"
    placeholder="请选择职能"
    @visible-change="visibleChange"
    loading-text="数据加载中..."
    :loading="loading"
  >
    <el-option :label="item.name" :value="item.id" v-for="item of list" :key="item.id"></el-option>
  </el-select>
</template>
<script>
import { sysPosition } from '@/api/system'
export default {
  name: 'BasePosition',
  data() {
    return {
      position: '',
      list: [],
      loading: false,
    }
  },
  created() {},
  methods: {
    visibleChange(visible) {
      if (visible && this.list.length === 0 && !this.loading) {
        this.loading = true
        sysPosition()
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