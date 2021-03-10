<template>
  <div class="base-customer">
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
              <span :class="['customer-name','col-item']">{{item.customerName}}</span>
              <span :class="['col-item',`cus-status${item.customerStatus}`]">{{item.customerStatus | getCusStatus}}</span>
            </el-col>
            <el-col :xs="6" :sm="6" :md="6" class="text-r">
              <span class="count">{{item.customerProCount}}</span>
            </el-col>
          </el-row>
          <el-row class="item-row sub_row">
            <el-col :xs="18" :sm="18" :md="18" class="sub_col">
              <span class="nature">{{item.customerProperty | getCusProperty}}</span>
              <span class="location">[ {{item.customerCity}} ]</span>
              <span>编号：{{item.cusNo}}</span>
            </el-col>
            <el-col :xs="6" :sm="6" :md="6" class="text-r">
              <span class="count-label">职位数</span>
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
import { getCustomerList } from '@/api/customer'
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
  },
  methods: {
    // 当前 tab Change
    tabChange(val) {
      this.tableData = []
      this.totalPage = 0
      this.getList()
      console.log('pro' + val)
    },
    currentChange(val) {
      console.log(val)
    },
    handleClick() {},
    getList() {
      let params = { ...this.defaultParams }
      this.listLoading = true
      getCustomerList(params)
        .then((res) => {
          let data = res.result
          this.totalPage = data.totalPage
          this.tableData = data.data || []
          console.log(data.data)
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
@import './customer.less';
</style>