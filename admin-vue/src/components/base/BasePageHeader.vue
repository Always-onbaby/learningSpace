<template>
  <div class="page-header">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'BasePageHeader',
  data() {
    return {}
  },
}
</script>
<style lang="less" scoped>
.page-header {
  margin: -24px -24px 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  position: relative;
  padding: 16px 24px;
  background-color: #fff;
  .header-heading {
    margin-top: 8px;
    .header-heading-title {
      padding-right: 12px;
      color: rgba(0, 0, 0, 0.85);
      font-weight: 600;
      font-size: 20px;
      line-height: 32px;
    }
  }
  .header-content {
    padding-top: 12px;
    overflow: hidden;
    .header-wrap-row {
      display: flex;
    }
  }
}
</style>