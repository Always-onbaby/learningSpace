<template>
  <div class="dashboard-analysis">
    <el-row :gutter="24">
      <el-col :xs="24" :sm="12" :md="6" :style="{ marginBottom: '24px' }">
        <el-card>
          <VeLine :data="chartData" :settings="chartSettings"></VeLine>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6" :style="{ marginBottom: '24px' }">
        <el-card>
          <VeLine :data="chartData" :settings="chartSettings"></VeLine>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6" :style="{ marginBottom: '24px' }">
        <el-card>
          <VeLine :data="chartData" :settings="chartSettings"></VeLine>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6" :style="{ marginBottom: '24px' }">
        <el-card>
          <VeLine :data="chartData" :settings="chartSettings"></VeLine>
        </el-card>
      </el-col>
    </el-row>
    <el-card :style="{marginBottom: '24px'}" :body-style="{paddingTop: 0}">
      <div class="self-header">
        <span class="card-title">电话数量</span>
        <div class="extra-wrapper">
          <div class="extra-item">
            <el-link :underline="false">今日</el-link>
            <el-link :underline="false">本周</el-link>
            <el-link :underline="false">本月</el-link>
            <el-link :underline="false">本年</el-link>
          </div>
          <el-date-picker
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </div>
      </div>
      <el-row :gutter="24">
        <el-col :xs="24" :sm="24" :md="16" :style="{ marginBottom: '24px' }">
          <Vehistogram :data="chartData" :settings="histogramSetting" :extend="chartExtend"></Vehistogram>
        </el-col>
        <el-col :xs="24" :sm="24" :md="8" :style="{ marginBottom: '24px' }" class="rank-wrap">
          <h4 class="title">电话数量排行榜</h4>
          <ul class="rank-list" v-loading="callList_loading">
            <li :class="['list-item','clearfix']" v-for="(item,index) of phoneCallList" :key="item.key">
              <span :class="[index + 1 < 4 ? 'active': '']">{{index + 1}}</span>
              <span>{{item.author}}</span>
              <span>{{item.callNo}}</span>
            </li>
          </ul>
        </el-col>
      </el-row>
    </el-card>
    <el-row :gutter="24">
      <el-col :xs="24" :sm="12" :md="12" :style="{ marginBottom: '24px' }">
        <el-card class="box-card" v-loading="perLoading" :body-style="{height:'536px'}">
          <div slot="header" class="clearfix">
            <span>绩效排行榜单</span>
            <el-button style="float: right; padding: 3px 0" type="text">查看详情</el-button>
          </div>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column type="index" label="排名"></el-table-column>
            <el-table-column prop="author" label="姓名"></el-table-column>
            <el-table-column prop="projectStatus" label="状态"></el-table-column>
            <el-table-column prop="id" label="编号" show-overflow-tooltip></el-table-column>
            <el-table-column prop="projectName" show-overflow-tooltip label="描述"></el-table-column>
          </el-table>
          <div class="page-wrap">
            <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :style="{ marginBottom: '24px' }">
        <el-card class="box-card" v-loading="perLoading">
          <div slot="header" class="clearfix">
            <span>绩效数据分析</span>
            <el-button style="float: right; padding: 3px 0" type="text">更多操作</el-button>
          </div>
          <Vebar :data="phoneData" :extend="chartExtend" height="496px"></Vebar>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import VeLine from 'v-charts/lib/line.common'
import Vebar from 'v-charts/lib/bar.common'
import Vehistogram from 'v-charts/lib/histogram.common'
import { getProjectList,getPhoneCallList } from '@/api/project'
import { getInfo, login, logout } from '@/api/login'
export default {
  components: {
    VeLine,
    Vebar,
    Vehistogram,
  },
  data() {
    return {
      chartExtend: {
        series(v) {
          v.forEach((i) => {
            i.barWidth = 10
          })
          return v
        },
      },
      histogramSetting: {
        metrics: ['电话数量'],
        dimension: ['日期'],
      },
      chartSettings: {
        metrics: ['电话数量', '下单用户'],
        dimension: ['日期'],
      },
      perLoading: false,
      tableData: [],
      totalPage: 0,
      chartData: {
        columns: ['日期', '电话数量', '下单用户', '下单率'],
        rows: [
          { 日期: '1/1', 电话数量: 1393, 下单用户: 1093, 下单率: 0.32 },
          { 日期: '1/2', 电话数量: 3530, 下单用户: 3230, 下单率: 0.26 },
          { 日期: '1/3', 电话数量: 2923, 下单用户: 2623, 下单率: 0.76 },
          { 日期: '1/4', 电话数量: 1723, 下单用户: 1423, 下单率: 0.49 },
          { 日期: '1/5', 电话数量: 3792, 下单用户: 3492, 下单率: 0.323 },
          { 日期: '1/6', 电话数量: 4593, 下单用户: 4293, 下单率: 0.78 },
        ],
      },
      phoneData: {
        columns: ['日期', '电话数量'],
        rows: [
          { 日期: '一月', 电话数量: 1393, 下单用户: 1093, 下单率: 0.32 },
          { 日期: '二月', 电话数量: 3530, 下单用户: 3230, 下单率: 0.26 },
          { 日期: '三月', 电话数量: 2923, 下单用户: 2623, 下单率: 0.76 },
          { 日期: '四月', 电话数量: 1723, 下单用户: 1423, 下单率: 0.49 },
          { 日期: '五月', 电话数量: 3792, 下单用户: 3492, 下单率: 0.323 },
          { 日期: '六月', 电话数量: 3792, 下单用户: 3492, 下单率: 0.323 },
          { 日期: '七月', 电话数量: 3792, 下单用户: 3492, 下单率: 0.323 },
          { 日期: '八月', 电话数量: 3792, 下单用户: 3492, 下单率: 0.323 },
          { 日期: '九月', 电话数量: 3792, 下单用户: 3492, 下单率: 0.323 },
          { 日期: '十月', 电话数量: 3792, 下单用户: 3492, 下单率: 0.323 },
          { 日期: '十一月', 电话数量: 3792, 下单用户: 3492, 下单率: 0.323 },
          { 日期: '十二月', 电话数量: 4593, 下单用户: 4293, 下单率: 0.78 },
        ],
      },
      phoneCallList: [],
      callList_loading: false
    }
  },
  mounted() {
    this.getData()
    this.getCallLlist()
  },
  methods: {
    getCallLlist() {
      this.callList_loading = true
      getPhoneCallList().then(res => {
        this.callList_loading = false
        this.phoneCallList = res.result
      })
    },
    getData() {
      let params = {
        pageNo: 1,
        pageSize: 10,
      }
      this.perLoading = true
      getProjectList(params).then((res) => {
        let data = res.result
        this.totalPage = data.totalPage
        this.tableData = data.data || []
        this.perLoading = false
      })
    },
  },
}
</script>
<style lang="less" scoped>
@import './analysis.less';
</style>