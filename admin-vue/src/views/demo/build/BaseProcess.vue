<template>
  <div class="base-process">
    <div class="dingflow-design">
      <div class="zoom">
        <el-input-number v-model="num" :step="10" label="描述文字"></el-input-number>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 100,
    }
  },
}
</script>
<style lang="less" scoped>
.base-process {
  position: relative;
  height: 100vh;
  .zoom {
    display: flex;
    position: fixed;
    // -webkit-box-align: center;
    // -ms-flex-align: center;
    align-items: center;
    // -webkit-box-pack: justify;
    // -ms-flex-pack: justify;
    justify-content: space-between;
    height: 40px;
    width: 125px;
    right: 40px;
    margin-top: 30px;
    z-index: 10;
  }
  .dingflow-design {
    width: 100%;
    background-color: #f5f5f7;
    overflow: auto;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
  }
}
</style>