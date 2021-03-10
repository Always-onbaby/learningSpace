<template>
  <div class="base-project">
    <el-card class="tab-card">
      <SelfTabs :paneList="paneList" :defaultValue="defaultValue" @tabChange="tabChange"></SelfTabs>
      <TableSearch></TableSearch>
    </el-card>
    <ul
      class="page-list"
      v-loading="listLoading"
      element-loading-text="数据加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="#fff"
    >
      <li class="list-item" v-for="item of tableData" :key="item.id">
        <el-card :body-style="{padding: 0}">
          <el-row class="item-row">
            <el-col :xs="18" :sm="18" :md="18">
              <span :class="['name','col-item']">{{item.projectName}}</span>
              <span
                :class="['col-item',`pro-status${item.projectStatus}`]"
              >{{item.projectStatus | getProStatus}}</span>
              <span :class="['col-item','customer-name']">{{item.customerName}}</span>
              <span
                :class="['col-item','project-city']"
                v-if="item.projectCity"
              >[ {{item.projectCity}} ]</span>
            </el-col>
            <el-col :xs="6" :sm="6" :md="6" class="text-r">
              <span class="project-no">编号：{{item.projectNo}}</span>
            </el-col>
          </el-row>
          <el-row class="item-row sub_row">
            <el-col :xs="18" :sm="18" :md="18" class="sub_col">
              <span class="nature">招聘人数：{{item.projectReqNumber}}</span>
              <span class="location">职位对接人：{{item.projectMaster}}</span>
              <span class="location">职位开始时间：{{item.projectStarttime}}</span>
              <span class="location">更新时间：{{item.projectUpdateTime}}</span>
            </el-col>
          </el-row>
          <el-row class="item-row under-row">
            <el-col class="sub_col">
              <span :class="['count']">
                全部：
                <b :class="[item.projectCandidate ? 'active': '']">{{item.projectCandidate}}</b>
              </span>
              <span :class="[item.projectFoundCount ? 'active': '','count']">
                寻访：
                <b :class="[item.projectFoundCount ? 'active': '']">{{item.projectFoundCount}}</b>
              </span>
              <span :class="[item.projectRecommendCount ? 'active': '','count']">
                推荐：
                <b :class="[item.projectRecommendCount ? 'active': '']">{{item.projectRecommendCount}}</b>
              </span>
              <span :class="[item.projectEffectiveRecommendCount ? 'active': '','count']">
                有效推荐：
                <b :class="[item.projectEffectiveRecommendCount ? 'active': '']">{{item.projectEffectiveRecommendCount}}</b>
              </span>
              <span :class="[item.projectInterviewCount ? 'active': '','count']">
                面试：
                <b :class="[item.projectInterviewCount ? 'active': '']">{{item.projectInterviewCount}}</b>
              </span>
              <span :class="[item.projectBackCount ? 'active': '','count']">
                谈薪：
                <b :class="[item.projectBackCount ? 'active': '']">{{item.projectBackCount}}</b>
              </span>
              <span :class="[item.projectOfferCount ? 'active': '','count']">
                Offer：
                <b :class="[item.projectOfferCount ? 'active': '']">{{item.projectOfferCount}}</b>
              </span>
              <span :class="[item.projectEntryCount ? 'active': '','count']">
                入职：
                <b :class="[item.projectEntryCount ? 'active': '']">{{item.projectEntryCount}}</b>
              </span>
              <span :class="[item.projectPayCount ? 'active': '','count']">
                保质期内离职：
                <b :class="[item.projectPayCount ? 'active': '']">{{item.projectPayCount}}</b>
              </span>
            </el-col>
          </el-row>
        </el-card>
      </li>
    </ul>
    <BasePagination
      @currentChange="currentChange"
      :currentPage="defaultParams.pageNo"
      :pageSize="defaultParams.pageSize"
      :total="totalPage"
    ></BasePagination>
  </div>
</template>
<script>
import { getProjectList } from '@/api/project'
// import { sysIndustry } from '@/api/system'
import SelfTabs from '@/components/list/SelfTabs'
import TableSearch from '@/components/list/TableSearch'
export default {
  components: {
    SelfTabs,
    TableSearch,
  },
  data() {
    return {
      activeName: '',
      tableData: [],
      totalPage: 0,
      listLoading: false,
      defaultValue: '1',
      paneList: [
        {
          value: '1',
          label: '我参与的职位',
        },
        {
          value: '2',
          label: '我负责的职位',
        },
        {
          value: '3',
          label: '我BD的职位',
        },
        {
          value: '4',
          label: '公司职位',
        },
        {
          value: '5',
          label: '联盟职位大厅',
        },
      ],
      defaultParams: {
        pageNo: 1,
        pageSize: 10,
      },
    }
  },
  mounted() {
    this.getList()
    // sysIndustry(this.defaultParams).then((res) => {
    //   console.log(res.result)
    // })
  },
  methods: {
    // 当前 tab Change
    tabChange(val) {
      this.tableData = []
      this.totalPage = 0
      this.getList()
      console.log('pro' + val)
    },
    // 分页查询
    currentChange(val) {
      // this.tableData = []
      // this.totalPage = 0
      this.defaultParams.pageNo = val
      this.getList()
      // console.log(val)
    },
    // 列表获取
    getList() {
      let params = { ...this.defaultParams }
      this.listLoading = true
      getProjectList(params)
        .then((res) => {
          let data = res.result
          this.totalPage = data.totalPage
          this.tableData = data.data || []
          this.listLoading = false
        })
        .catch(() => {
          this.listLoading = false
        })
    },
  },
}
</script>
<style lang="less" scoped>
@import './project.less';
</style>