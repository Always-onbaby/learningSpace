<template>
  <div class="page-header-index-wide">
    <el-row :gutter="24">
      <el-col :md="24" :lg="7">
        <el-card :header="false">
          <div class="account-center-avatarHolder">
            <div class="avatar">
              <img :src="avatar" />
            </div>
            <div class="username">{{ nickname }}</div>
            <div class="bio">海纳百川，有容乃大</div>
          </div>
        </el-card>
      </el-col>
      <el-col :md="24" :lg="17">2</el-col>
    </el-row>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['nickname', 'avatar']),
  },
}
</script>
<style lang="less" scoped>
.page-header-index-wide {
  margin: 0 30px;
  .account-center-avatarHolder {
    text-align: center;
    margin-bottom: 24px;
    .username {
      color: rgba(0, 0, 0, 0.85);
      font-size: 20px;
      line-height: 28px;
      font-weight: 500;
      margin-bottom: 4px;
    }
    .bio {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.65);
    }
    .avatar {
      margin: 0 auto;
      width: 104px;
      height: 104px;
      margin-bottom: 20px;
      border-radius: 50%;
      overflow: hidden;
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>