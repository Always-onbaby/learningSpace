<template>
  <div>
    <div class="tab_wrap" v-loading="loading">
      <el-table :data="list" style="width: 100%">
        <el-table-column label="姓名" min-width="90" show-overflow-tooltip prop="personName"></el-table-column>
        <el-table-column label="英文名" min-width="90" show-overflow-tooltip prop="englishPersonName"></el-table-column>
        <el-table-column label="人才状态" min-width="80" prop="workStatus"></el-table-column>
        <el-table-column label="联系电话" min-width="140" prop="personTel"></el-table-column>
        <el-table-column label="性别" min-width="60" prop="personSex"></el-table-column>
        <el-table-column label="学历" min-width="80" prop="personEducation"></el-table-column>
        <el-table-column label="年龄" min-width="60" prop="personAge"></el-table-column>
        <el-table-column label="地区" min-width="160" show-overflow-tooltip prop="personLocate"></el-table-column>
        <el-table-column label="工龄" min-width="60" prop="personWorkYears"></el-table-column>
        <el-table-column label="所有者" min-width="80" prop="resumeOwner"></el-table-column>
        <el-table-column label="备注" min-width="60" prop="noteCount"></el-table-column>
        <el-table-column label="项目" min-width="60" prop="personJoinCount"></el-table-column>
        <!-- <el-table-column label="收藏" width="180" prop="personName"></el-table-column>
        <el-table-column label="职位" width="180" prop="personName"></el-table-column> -->
        <!-- <el-table-column label="姓名/英文名" width="180">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>姓名: {{ scope.row.name }}</p>
              <p>住址: {{ scope.row.address }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column> -->
      </el-table>
    </div>
    <BasePagination
      @currentChange="currentChange"
      :currentPage="pageParam.pageNo"
      :pageSize="pageParam.pageSize"
      :total="totalPage"
    ></BasePagination>
    <!-- <div class="text">
      <p class="text_p">1,2020/11/11减去15</p>
    </div> -->
  </div>
</template>
<script>
import { getResumeList } from '@/api/resume'
export default {
  components: {},
  data() {
    return {
      loading: false,
      totalPage: 0,
      list: [],
      pageParam: {
        pageNo: 1,
        pageSize: 15,
      },
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    currentChange(val) {
      console.log(val)
    },
    getList() {
      this.loading = true
      let params = Object.assign({}, this.pageParam)
      getResumeList(params).then((res) => {
        this.totalPage = res.result.totalPage
        let _list = res.result.data
        this.list = _list.map(item => {
          return {...item}
        })
        console.log(_list)
        this.loading = false
      })
    },
  },
}
</script>
<style lang="less" scoped>
@import './baseList.less';
</style>