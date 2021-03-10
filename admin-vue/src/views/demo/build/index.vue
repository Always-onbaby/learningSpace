<template>
  <div class="designer">
    <div class="create-page-header">
      <div class="name">
        <el-image class="img-wrap" :src="url" fit="cover"></el-image>
        <span>健康承诺书</span>
      </div>
      <div class="tab">
        <div class="tabs">
          <div
            :class="['tab-item', currentTab === item.value ? 'active' : '']"
            v-for="item of tabs"
            :key="item.value"
            @click.self="changeTab(item.value)"
          >{{item.label}}</div>
        </div>
      </div>
      <div class="action">
        <el-button plain @click="calcelEdit">取 消</el-button>
        <el-button type="primary">发 布</el-button>
      </div>
    </div>
    <div class="page-content">
      <BaseSetting
        v-if="currentTab === 'baseSetting'"
        :configData.sync="configData"
        :dirList="dirList"
      ></BaseSetting>
      <BaseForm v-if="currentTab === 'form'" :configData.sync="configData" :dirList="dirList"></BaseForm>
      <BaseProcess v-if="currentTab === 'process'" :configData.sync="configData" :dirList="dirList"></BaseProcess>
      <FillSetting
        v-if="currentTab === 'fillSetting'"
        :configData.sync="configData"
        :dirList="dirList"
      ></FillSetting>
    </div>
  </div>
</template>
<script>
import {
  getApproveConfig,
  getFormAndProcessConfig,
  canManageMembers,
  canVisibleDataMembers,
  canVisibleMembers,
} from '@/api/approve'
import BaseSetting from './BaseSetting'
import BaseForm from './BaseForm'
import BaseProcess from './BaseProcess'
import FillSetting from './FillSetting'
export default {
  components: {
    BaseSetting,
    BaseForm,
    FillSetting,
    BaseProcess,
  },
  data() {
    return {
      tabs: [
        {
          label: '基础设置',
          value: 'baseSetting',
        },
        {
          label: '表单设计',
          value: 'form',
        },
        {
          label: '流程设计',
          value: 'process',
        },
        {
          label: '高级设计',
          value: 'fillSetting',
        },
      ],
      currentTab: 'baseSetting',
      url: 'https://gw.alicdn.com/tfs/TB1e76lCOLaK1RjSZFxXXamPFXa-112-112.png',
      passComponentList: [],
      iconUrlMap: [],
      dirList: [],
      configData: {},
    }
  },
  created() {
    this.getFormAndProcessConfig()
  },
  mounted() {
    this.getApproveConfig()
    this.getCanManageMembers()
    this.getCanVisibleDataMembers()
    this.getCanVisibleMembers()
  },
  methods: {
    // 取消编辑
    calcelEdit() {
      this.$router.replace('/demo/center')
    },
    // 可以管理模板并导出数据人员
    getCanManageMembers() {
      let params = {
        processCode: 'PROC-0D4F4CD1-9FCB-4706-9D87-F39045B801BB',
      }
      canManageMembers(params).then((res) => {
        const data = res.result
        console.log(res.result)
      })
    },
    // 可以查看数据人员列表
    getCanVisibleDataMembers() {
      let params = {
        processCode: 'PROC-0D4F4CD1-9FCB-4706-9D87-F39045B801BB',
      }
      canVisibleDataMembers(params).then((res) => {
        const data = res.result
        console.log(res.result)
      })
    },
    // 可以发起审批人员列表
    getCanVisibleMembers() {
      let params = {
        processCode: 'PROC-0D4F4CD1-9FCB-4706-9D87-F39045B801BB',
      }
      canVisibleMembers(params).then((res) => {
        const data = res.result
        console.log(res.result)
      })
    },
    // 获取基础设置数据
    getFormAndProcessConfig() {
      let params = {
        processCode: 'PROC-0D4F4CD1-9FCB-4706-9D87-F39045B801BB',
        tag: '',
        appType: 0,
      }
      getFormAndProcessConfig(params).then((res) => {
        const data = res.result
        this.configData = data
        // console.log(res.result)
      })
    },
    // Tab切换
    changeTab(val) {
      // console.log(this.currentTab)
      if (val == this.currentTab) {
        return false
      }
      this.currentTab = val
      this.$router.replace({
        path: this.$route.fullPath,
        query: {
          tab: val,
        },
      })
    },
    // approve设置
    getApproveConfig() {
      let params = {
        formType: 0,
        formTarget: 'INTERNAL',
        bizName: 'PAAS',
      }
      getApproveConfig(params).then((res) => {
        const data = res.result
        // console.log(data)
        this.passComponentList = data.paaSComponent || []
        this.iconUrlMap = data.iconUrlMap || []
        this.dirList = data.dirList || []
      })
    },
  },
  watch: {
    $route(val) {
      this.currentTab = val.query.tab
      // console.log(val.query.tab)
    },
  },
}
</script>
<style lang="less" scoped>
@import './index.less';
</style>