<template>
  <div>
    <div class="job_search">
      <el-form :model="searchForm" ref="searchForm" label-width="100px">
        <el-row>
          <el-col :span="6">
            <el-form-item prop="projectIndustry" label="行业">
              <BaseIndustry></BaseIndustry>
              <!-- <el-select v-model="searchForm.projectIndustry" size="small" filterable placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select> -->
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item prop="projectPosition" label="职能">
              <BasePosition></BasePosition>
              <!-- <el-select v-model="searchForm.projectPosition" size="small" filterable placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select> -->
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item prop="customerName" label="客户">
              <BaseCustomer></BaseCustomer>
              <!-- <el-select v-model="searchForm.customerName" size="small" filterable placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select> -->
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item prop="cityId" label="地点">
              <el-select v-model="searchForm.cityId" size="small" filterable placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item prop="projectStatus" label="状态">
              <div class="project_status">
                <span :class="['status_text', searchForm.projectStatus == 'Live' ? 'active' : '']">进展中</span>
                <el-divider direction="vertical"></el-divider>
                <span class="status_text">暂停的</span>
                <el-divider direction="vertical"></el-divider>
                <span class="status_text">成功的</span>
                <el-divider direction="vertical"></el-divider>
                <span class="status_text">失败的</span>
                <el-divider direction="vertical"></el-divider>
                <span class="status_text">取消的</span>
              </div>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item prop="projectType" label="类型">
              <div class="project_status">
                <span :class="['status_text', searchForm.projectType == '1' ? 'active' : '']">重点项目</span>
                <el-divider direction="vertical"></el-divider>
                <span class="status_text">普通项目</span>
              </div>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div class="job_search_total"></div>
    </div>
    <div class="job_list"></div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      searchForm: {
        projectType: 1,
        projectStatus:'Live'
      },
      options: [
        {
          value: '选项1',
          label: '黄金糕',
        },
        {
          value: '选项2',
          label: '双皮奶',
        },
        {
          value: '选项3',
          label: '蚵仔煎',
        },
        {
          value: '选项4',
          label: '龙须面',
        },
        {
          value: '选项5',
          label: '北京烤鸭',
        },
      ],
    }
  },
  computed: {
    ...mapGetters(['nickname', 'avatar']),
  },
}
</script>
<style lang="less" scoped>
@import './index.less';
// .page-header-index-wide {
//   margin: 0 30px;
//   .account-center-avatarHolder {
//     text-align: center;
//     margin-bottom: 24px;
//     .username {
//       color: rgba(0, 0, 0, 0.85);
//       font-size: 20px;
//       line-height: 28px;
//       font-weight: 500;
//       margin-bottom: 4px;
//     }
//     .bio {
//       font-size: 14px;
//       color: rgba(0, 0, 0, 0.65);
//     }
//     .avatar {
//       margin: 0 auto;
//       width: 104px;
//       height: 104px;
//       margin-bottom: 20px;
//       border-radius: 50%;
//       overflow: hidden;
//       img {
//         height: 100%;
//         width: 100%;
//       }
//     }
//   }
// }
</style>