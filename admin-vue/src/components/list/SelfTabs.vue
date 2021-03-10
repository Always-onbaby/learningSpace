<template>
  <div class="tabs-wrap">
    <el-tabs v-model="activeName" :type="type" @tab-click="handleClick">
      <el-tab-pane
        :label="item.label"
        :name="item.value"
        v-for="item of paneList"
        :key="item.value"
      ></el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  name: 'SelfTabs',
  props: {
    type: {
      type: String,
      default: '',
    },
    paneList: {
      type: Array,
      default: () => [],
    },
    defaultValue: {
      type: String,
      default: '1',
    },
  },
  computed: {
    activeName: {
      get() {
        return this.defaultValue
      },
      set() {},
    },
  },
  data() {
    return {}
  },
  methods: {
    handleClick(val) {
      this.$emit('tabChange',val.name)
      // console.log(val.name)
    },
  },
}
</script>
<style lang="less" scoped>
</style>