<template>
  <div class="table-search">
    <el-form ref="form" :model="form" label-width="100px" :inline="true">
      <el-row :gutter="100">
        <el-col :xs="24" :sm="12">
          <el-form-item label="名称/编号">
            <el-input v-model="form.key"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12">
          <el-form-item label="行业选择">
            <BaseIndustry></BaseIndustry>
            <!-- <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select> -->
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12">
          <el-form-item label="职能选择">
            <BasePosition></BasePosition>
            <!-- <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select> -->
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12">
          <el-form-item label="客户选择">
            <BaseCustomer></BaseCustomer>
            <!-- <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select> -->
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12">
          <el-form-item label="地点选择">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12">
          <el-form-item label="项目状态">
            <el-radio-group v-model="form.radio">
              <el-radio :label="1">进展中</el-radio>
              <el-radio :label="2">暂停的</el-radio>
              <el-radio :label="3">成功的</el-radio>
              <el-radio :label="4">失败的</el-radio>
              <el-radio :label="5">取消的</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12">
          <el-form-item label="项目类型">
            <el-radio-group v-model="form.radio">
              <el-radio :label="1">重点项目</el-radio>
              <el-radio :label="2">普通项目</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12">
          <div class="btn-wrap">
            <el-button type="primary">查询</el-button>
            <el-button plain>重置</el-button>
          </div>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'TableSearch',
  data() {
    return {
      form: {
        radio: 1,
      },
    }
  },
}
</script>
<style lang="less" scoped>
.table-search {
  /deep/.el-form-item {
    display: flex;
    margin-right: 0;
    .el-form-item__content {
      flex: auto;
      .el-select  {
        width: 100%;
      }
    }
  }
  .btn-wrap {
    // text-align: right;
    // padding-right: 20px;
    .el-button {
      min-width: 89px;
    }
    padding-left: 100px;
  }
  /deep/.el-radio {
    margin-right: 6px;
    .el-radio__label {
      padding-left: 4px;
    }
  }
}
</style>