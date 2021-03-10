<template>
  <div class="table-page-wrap">
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page.sync="currentPageNum"
      :page-size="pageSize"
      background
      layout="slot, prev, pager, next"
      :total="total"
      :hide-on-single-page="Math.ceil(total/pageSize)<=1"
    >
      <span class="pagination-total">
        共
        <b class="padding-6">{{total}}</b>条记录
      </span>
      <span class="pagination-current-page">
        第
        <b>{{currentPageNum}}</b>/{{Math.ceil(total/pageSize)}}页
      </span>
    </el-pagination>
  </div>
</template>
<script>
import { scrollTo } from '@/utils/scroll-to'
export default {
  name: 'BasePagination',
  props: {
    total: {
      type: Number,
      default: () => null
    },
    currentPage: {
      type: Number,
      default: () => 1
    },
    pageSize: {
      type: Number,
      default: () => 10
    },
    autoScroll: {
      type: Boolean,
      default: true
    },
  },
  data() {
    return {
      currentPageNum: this.currentPage
    }
  },
  methods: {
    handleCurrentChange(val) {
      this.$emit('currentChange',val)
      if(this.autoScroll) {
        scrollTo(0,800)
      }
    }
  },
  watch: {
    currentPage(val) {
      this.currentPageNum = val
    }
  }
}
</script>
<style lang="less" scoped>
  .table-page-wrap {
    padding-top: 26px;
    text-align: right;
    .pagination-total,.pagination-current-page {
      margin-right: 11px;
      color: #777777;
      >b {
        color: #5577f3;
        &.padding-6 {
          padding: 0 6px;
        }
      }
    }
  }
</style>