<template>
  <div class="base-candidate">
    <el-card class="tab-card">
      <SelfTabs :paneList="paneList" :defaultValue="defaultValue" @tabChange="tabChange"></SelfTabs>
      <TableSearch></TableSearch>
    </el-card>
    <el-card class="tab-card tab-nav">
      <span
        :class="['nav-item', navActive == item.id ? 'active' : '']"
        v-for="item of tabNavList"
        :key="item.id"
        @click="filterByFlowName(item.id)"
      >
        {{item.label}}
        <b>{{item.notes}}</b>
      </span>
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
            <el-col :xs="20" :sm="20" :md="20" class="clo_center">
              <el-avatar  :src="item.circleUrl"></el-avatar>
              <span :class="['customer-name','col-item']">{{item.personName}}</span>
              <span :class="['col-item','person-duty']">参与职位：<b>{{item.personduty}}</b></span>
              <span :class="['col-item','note-nums']">备注 ({{item.notes}}) 条</span>
            </el-col>
            <el-col :xs="4" :sm="4" :md="4" class="text-r">
              <span class="count">{{item.customerProCount}}</span>
            </el-col>
          </el-row>
          <el-row class="item-row sub_row">
            <el-col :xs="20" :sm="20" :md="20" class="sub_col">
              <span class="nature">{{item.customerProperty}}</span>
              <span class="location">{{item.customerCity}}</span>
              <span>编号：{{item.cusNo}}</span>
            </el-col>
            <el-col :xs="4" :sm="4" :md="4" class="text-r">
              <!-- <span class="count">职位数</span> -->
            </el-col>
          </el-row>
          <el-row class="item-row under-row">
            <el-col class="sub_col">
              <span>{{item.customerIndustry}}</span>
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
    <!-- <el-pagination layout="prev, pager, next" :total="totalPage"></el-pagination> -->
  </div>
</template>
<script>
import { getCandidateList } from '@/api/candidate'
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
      navActive: '0',
      tabNavList: [
        {
          label: '全部',
          id: '0',
        },
        {
          label: '寻访',
          id: '10010',
        },
        {
          label: '简历推荐',
          id: '10050',
        },
        {
          label: '有效推荐',
          id: '10070',
        },
        {
          label: '面试',
          id: '10110',
        },
        {
          label: '谈薪',
          id: '10170',
        },
        {
          label: 'Offer',
          id: '10210',
        },
        {
          label: '入职',
          id: '10250',
        },
        // {
        //   label: '保质期内离职',
        //   id: '10260'
        // },
        {
          label: '度过保质期',
          id: '10270',
        },
      ],
      paneList: [
        {
          value: '1',
          label: '我是交付人',
        },
        {
          value: '2',
          label: '我是对接人',
        },
        {
          value: '3',
          label: '我是BD',
        },
        {
          value: '4',
          label: '我是部门负责人',
        },
        {
          value: '5',
          label: '我是简历所有者',
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
  },
  methods: {
    filterByFlowName(flow) {
      this.navActive = flow
      this.getList()
    },
    // 当前 tab Change
    tabChange(val) {
      this.tableData = []
      this.totalPage = 0
      this.getList()
    },
    currentChange(val) {
      this.getList()
      // console.log(val)
    },
    handleClick() {},
    getList() {
      let params = { ...this.defaultParams }
      this.listLoading = true
      getCandidateList(params)
        .then((res) => {
          let data = res.result
          this.totalPage = data.totalPage
          this.tableData = data.data || []
          // console.log(data.data)
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
@import './candidate.less';
</style>