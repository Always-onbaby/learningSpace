<template>
  <div>
    <!-- <scroll-container>
      <el-image v-for="url in urls" :key="url" :src="url" lazy></el-image>
    </scroll-container>-->
    <div class="set-content">
      <div id="companyInfo">
        <div class="info-header">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
          >
            <el-image v-if="companyInfo.logo" :src="companyInfo.logo" class="logo-wrap"></el-image>
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <div class="header-main-info">
            <p class="item">
              <i class="iconfont active el-icon-platform-eleme"></i>
              <i class="iconfont el-icon-platform-eleme"></i>
              <span class="company-name">中国华能集团有限公司</span>
              <span>标准版</span>
            </p>
            <p class="item credit_code">社会信用代码：91120222MA06DEQU2F</p>
            <p class="item info_tips">推荐报告中的信息将自动获取公司信息，同时公司信息将同步到税优地，请上传有效的公司证件，填写真实的公司信息；</p>
          </div>
        </div>
        <div class="info-main">
          <ul class="main-item main-left">
            <li class="left_item">
              <span class="label">公司名称：</span>
              <span class="input_value">中国华能集团有限公司</span>
            </li>
            <li class="left_item">
              <span class="label">社会信用代码：</span>
              <span class="input_value">91120222MA06DEQU2F</span>
            </li>
            <li class="left_item">
              <span class="label">法人代表或委托代理人：</span>
              <span class="input_value">小黄</span>
            </li>
            <li class="left_item">
              <span class="label">法人代表或委托代理人身份证号：</span>
              <span class="input_value">432101198103530361</span>
            </li>
            <li class="left_item edit_item">
              <span class="label">电话号码：</span>
              <span class="input_value">18613155664</span>
              <i class="edit_icon el-icon-edit-outline"></i>
            </li>
            <li class="left_item edit_item">
              <span class="label">传真号码：</span>
              <span class="input_value">010-2256787</span>
              <i class="edit_icon el-icon-edit-outline"></i>
            </li>
            <li class="left_item edit_item">
              <span class="label">邮箱地址：</span>
              <span class="input_value">MA06DEQU2F@163.com</span>
              <i class="edit_icon el-icon-edit-outline"></i>
            </li>
            <li class="left_item edit_item">
              <span class="label">公司网址：</span>
              <span class="input_value">www.baidufaja.com</span>
              <i class="edit_icon el-icon-edit-outline"></i>
            </li>
            <li class="left_item edit_item">
              <span class="label">对接人：</span>
              <span class="input_value">张三</span>
              <i class="edit_icon el-icon-edit-outline"></i>
            </li>
            <li class="left_item edit_item">
              <span class="label">对接人邮箱地址：</span>
              <span class="input_value">MA06DEQU2F@163.com</span>
              <i class="edit_icon el-icon-edit-outline"></i>
            </li>
            <li class="left_item edit_item">
              <span class="label">对接人电话号码：</span>
              <el-input v-model="dockIphone" size="mini"></el-input>
              <el-button type="text" size="mini" class="cancle_btn">取消</el-button>
              <el-button type="text" size="mini">保存</el-button>
              <!-- <span class="input_value">18613155664</span> -->
              <!-- <i class="edit_icon el-icon-edit-outline"></i> -->
            </li>
            <li class="left_item bill_info_title">
              <span class="label left">银行开户行信息</span>
              <el-button type="text" size="mini">新增开户行</el-button>
            </li>
            <li class="left_item edit_item bill_info">
              <div class="info_list_item">
                <div class="content_wrap">
                  <p class="item_text">北京全猎科技有限公司（工商银行）</p>
                  <p class="item_text">3214567890987</p>
                </div>
                <div class="btn_wrap">
                  <el-button type="text" size="mini">编辑</el-button>
                  <el-button type="text" size="mini">删除</el-button>
                </div>
              </div>
            </li>
          </ul>
          <div class="main-item main_right">
            <div class="license_wrap">
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
              >
                <el-image
                  v-if="companyInfo.logo"
                  style="width: 100%; height: 100%"
                  :src="companyInfo.logo"
                  fit="cover"
                ></el-image>
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
              <!-- <el-image style="width: 100%; height: 80%" :src="companyInfo.logo" fit="cover"></el-image> -->
              <div class="img_tips">营业执照缩略图</div>
            </div>
            <div class="id_code_wrap">
              <div class="img_wrap">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                >
                  <el-image
                    v-if="companyInfo.logo"
                    style="width: 100%; height: 100%"
                    :src="companyInfo.logo"
                    fit="cover"
                  ></el-image>
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>

                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                >
                  <el-image
                    v-if="companyInfo.logo"
                    style="width: 100%; height: 100%"
                    :src="companyInfo.logo"
                    fit="cover"
                  ></el-image>
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                <!-- <el-image style="width: 100%; height: 49%" :src="companyInfo.logo" fit="cover"></el-image>
                <el-image style="width: 100%; height: 49%" :src="companyInfo.logo" fit="cover"></el-image>-->
              </div>
              <div class="img_tips">法人代表或委托代理人身份证</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="set-content">
      <div id="companyInfo">
        <div class="info-header">
          <el-image :src="companyInfo.logo" class="logo-wrap"></el-image>
          <div class="header-main-info">
            <p class="item">
              <i class="iconfont active el-icon-platform-eleme"></i>
              <i class="iconfont el-icon-platform-eleme"></i>
              <span class="company-name">中国华能集团有限公司</span>
              <span>标准版</span>
            </p>
            <p class="item credit_code">社会信用代码：91120222MA06DEQU2F</p>
            <p class="item info_tips">推荐报告中的信息将自动获取公司信息，同时公司信息将同步到税优地，请上传有效的公司证件，填写真实的公司信息；</p>
          </div>
        </div>
        <div class="info-main">
          <ul class="main-item main-left">
            <li class="left_item">
              <span class="label">社会信用代码：</span>
              <span class="input_value">91120222MA06DEQU2F</span>
            </li>
            <li class="left_item edit_item">
              <span class="label">开票地址：</span>
              <span class="input_value">天津市武清区杨村街泉州北路18号B座589室-2（集中办公区）</span>
              <i class="edit_icon el-icon-edit-outline"></i>
            </li>
            <li class="left_item edit_item">
              <span class="label">开票电话：</span>
              <span class="input_value">010-2256787</span>
              <i class="edit_icon el-icon-edit-outline"></i>
            </li>
            <li class="left_item edit_item">
              <span class="label">开户银行：</span>
              <span class="input_value">MA06DEQU2F@163.com</span>
              <i class="edit_icon el-icon-edit-outline"></i>
            </li>
            <li class="left_item edit_item">
              <span class="label">所属行业：</span>
              <span class="input_value">www.baidufaja.com</span>
              <i class="edit_icon el-icon-edit-outline"></i>
            </li>
            <li class="left_item edit_item">
              <span class="label">经营范围：</span>
              <span class="input_value">张三</span>
              <i class="edit_icon el-icon-edit-outline"></i>
            </li>
            <li class="left_item edit_item">
              <span class="label">开票类目：</span>
              <el-input v-model="dockIphone" size="mini"></el-input>
              <el-button type="text" size="mini" class="cancle_btn">取消</el-button>
              <el-button type="text" size="mini">保存</el-button>
              <!-- <span class="input_value">18613155664</span> -->
              <!-- <i class="edit_icon el-icon-edit-outline"></i> -->
            </li>
          </ul>
          <div class="main-item main_right">
            <div class="license_wrap">
              <el-image style="width: 100%; height: 80%" :src="companyInfo.logo" fit="cover"></el-image>
              <div class="img_tips">营业执照缩略图</div>
            </div>
            <div class="id_code_wrap">
              <div class="img_wrap">
                <el-image style="width: 100%; height: 49%" :src="companyInfo.logo" fit="cover"></el-image>
                <el-image style="width: 100%; height: 49%" :src="companyInfo.logo" fit="cover"></el-image>
              </div>
              <div class="img_tips">法人代表或委托代理人身份证</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="set-content">
      <div id="businessCompany">
        <div class="info-header">
          <el-image :src="companyInfo.logo" class="logo-wrap"></el-image>
          <div class="header-main-info">
            <p class="item">
              <i class="iconfont active el-icon-platform-eleme"></i>
              <i class="iconfont el-icon-platform-eleme"></i>
              <span class="company-name">中国华能集团有限公司</span>
              <span>标准版</span>
            </p>
            <p class="item credit_code">社会信用代码：91120222MA06DEQU2F</p>
            <p class="item info_tips">推荐报告中的信息将自动获取公司信息，同时公司信息将同步到税优地，请上传有效的公司证件，填写真实的公司信息；</p>
          </div>
        </div>
        <div class="info-main">
          <div class="tab_wrap">
            <el-table
              :data="tableData"
              style="width: 100%"
              stripe
              header-row-class-name="header_row"
            >
              <el-table-column type="index" label="编号" min-width="50"></el-table-column>
              <el-table-column prop="name" label="业务承揽公司名称" min-width="130" show-overflow-tooltip></el-table-column>
              <el-table-column label="状态" min-width="80">
                <template slot-scope="scope">
                  <span :class="`status_${scope.row.status}`">{{scope.row.status}}</span>
                </template>
              </el-table-column>
              <el-table-column prop="code" label="社会信用代码" min-width="120" show-overflow-tooltip></el-table-column>
              <el-table-column prop="contactName" label="联系人" min-width="80"></el-table-column>
              <el-table-column prop="phone" min-width="100" label="联系人手机号"></el-table-column>
              <el-table-column prop="emall" label="邮箱" min-width="140" show-overflow-tooltip></el-table-column>
              <el-table-column fixed="right" label="操作" width="100">
                <template slot-scope="scope">
                  <el-button
                    @click.native.prevent="deleteRow(scope.$index, tableData)"
                    type="text"
                    size="small"
                  >查看</el-button>
                  <el-button
                    @click.native.prevent="deleteRow(scope.$index, tableData)"
                    type="text"
                    size="small"
                  >激活</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>

    <div class="set-content details_con_wrap">
      <div class="info_item">
        <div class="item_title">
          <p>基础信息</p>
        </div>
        <div class="item_con">
          <el-row>
            <el-col :span="12" class="item_con_col">
              <span class="label">公司名称：</span>
              <span class="text">抗美药业股份有限公司</span>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="info_item">
        <div class="item_title">
          <p>合同信息</p>
        </div>
        <div class="item_con">
          <el-row>
            <el-col :span="12" class="item_con_col">
              <span class="label">合同起止时间：</span>
              <span class="text">2020-06-03 ~ 2050-12-01</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12" class="item_con_col">
              <span class="label">合同：</span>
              <div class="contract_list">
                <div class="contract_list_item">
                  <span>这是一个合同文件</span>
                  <span>2020-02-13</span>
                </div>
                <div class="contract_list_item">
                  <span>这是一个合同文件</span>
                  <span>2020-02-13</span>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="info_item">
        <div class="item_title">
          <p>服务费费率</p>
        </div>
        <div class="item_con">
          <el-row>
            <el-col :span="12" class="item_con_col">
              <span class="label">服务费费率：</span>
              <span class="text">0.76%</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12" class="item_con_col">
              <span class="label">结算方式：</span>
              <span class="text">银行卡</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12" class="item_con_col">
              <span class="label">结算方式：</span>
              <span class="text">增值税发票</span>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div class="set-content">
      <el-dialog
        title="个人信息完善"
        custom-class="user-form-dia"
        :visible.sync="infoVisible"
        :lock-scroll="false"
        width="460px"
      >
        <el-form
          label-position="top"
          :model="editUserInfo"
          ref="userForm"
          :rules="rules"
          class="user-form"
        >
          <el-form-item label="真实姓名" prop="realName">
            <el-input v-model="editUserInfo.realName"></el-input>
          </el-form-item>
          <el-form-item label="手机号码" prop="realName">
            <el-input v-model="editUserInfo.realName"></el-input>
          </el-form-item>
          <el-form-item label="银行卡号" prop="realName">
            <el-input v-model="editUserInfo.realName"></el-input>
          </el-form-item>
          <el-form-item label="开户银行" prop="realName">
            <el-input v-model="editUserInfo.realName"></el-input>
          </el-form-item>
          <el-form-item label="身份证号" prop="realName">
            <el-input v-model="editUserInfo.realName"></el-input>
          </el-form-item>
          <el-form-item label="身份证照" prop="realName" class="id_wrap">
            <el-image style="width: 100px; height: 100px" :src="editUserInfo.idPos" fit="cover"></el-image>
            <el-image style="width: 100px; height: 100px" :src="editUserInfo.idObv" fit="cover"></el-image>
          </el-form-item>
          <!-- <el-from-item>
            <el-checkbox v-model="checked">同意协议</el-checkbox>
          </el-from-item>-->
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="infoVisible = false" size="small">提交并验证</el-button>
        </span>
      </el-dialog>
      <el-dialog
        title="客户发布委托"
        custom-class="company-form-dia"
        :visible.sync="companyInfoVisible"
        :lock-scroll="false"
        width="840px"
      >
        <div class="info-content">
          <ul class="info-list">
            <li class="list-item">
              <span class="label">公司名称：</span>
              <span class="text">中国华能集团有限公司</span>
            </li>
            <li class="list-item">
              <span class="label">社会信用代码：</span>
              <span class="text">91120222MA06DEQU2F</span>
            </li>
            <li class="list-item">
              <span class="label">法人代表或委托代理人：</span>
              <span class="text">华公司</span>
            </li>
            <li class="list-item">
              <span class="label">法人代表或委托代理人身份证号：</span>
              <span class="text">432101198103530361</span>
            </li>
            <li class="list-item">
              <span class="label">电话号码：</span>
              <span class="text">18613155664</span>
            </li>
            <li class="list-item">
              <span class="label">传真号码：</span>
              <span class="text">010-2256787</span>
            </li>
            <li class="list-item">
              <span class="label">邮箱地址：</span>
              <span class="text">MA06DEQU2F@163.com</span>
            </li>
            <li class="list-item">
              <span class="label">公司网址：</span>
              <span class="text">www.baidufaja.com</span>
            </li>
            <li class="list-item">
              <span class="label">对接人：</span>
              <span class="text">张飞</span>
            </li>
            <li class="list-item">
              <span class="label">对接人邮箱地址：</span>
              <span
                class="text"
              >MA06DEQU2F@163.comMA06DEQU2F@163.comMA06DEQU2F@163.comMA06DEQU2F@163.comMA06DEQU2F@163.com</span>
            </li>
            <li class="list-item">
              <span class="label">对接人电话号码：</span>
              <span class="text">18613155664</span>
            </li>
            <li class="list-item check_wrap">
              <el-checkbox v-model="checked" size="mini">
                同意委托协议
                <b class="show-detail">查看协议>></b>
              </el-checkbox>
            </li>
          </ul>
          <div class="id_wrap">
            <el-image style="width: 250px; height: 330px" :src="companyInfo.logo" fit="cover"></el-image>
            <p class="image_tips">营业执照缩略图</p>
          </div>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="infoVisible = false" size="small">提交并验证</el-button>
        </span>
      </el-dialog>
      <el-dialog
        title="评测规则"
        custom-class="roles-dia"
        :visible.sync="rolesVisible"
        :lock-scroll="false"
        width="560px"
      >
        <div class="info-content">
          <el-table border :data="rolesData" size="small" style="width: 100%" max-height="450px">
            <el-table-column align="center" prop="title" label="指标项" width="180"></el-table-column>
            <el-table-column align="center" prop="content" label="价值折算"></el-table-column>
          </el-table>
          <div class="tab_tips">数据来源：根据公司管理结构中成员个人的行为数据和负责人所属的所有人员行为数据累计计算；</div>
        </div>
      </el-dialog>
      <el-button @click="rolesVisible = true">呼出</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rolesVisible: false,
      rolesData: [
        {
          title: '创建客户数',
          content: '含项目：500元/个；不含项目：100元/个',
        },
        {
          title: '录入简历数',
          content: '10元/个',
        },
        {
          title: '认领简历数',
          content: '1元/个',
        },
        {
          title: '通话时长',
          content: '15~45秒：1元/个；45秒以上：2元/个',
        },
        {
          title: '有效沟通',
          content: '2元/个',
        },
        {
          title: '简单备注',
          content: '2元/个',
        },
        {
          title: '标准备注',
          content: '4元/个',
        },
        {
          title: 'MPC',
          content: '10元/个',
        },
        {
          title: '寻访数',
          content: '1元/个',
        },
        {
          title: '推荐数',
          content: '10元/个',
        },
        {
          title: '有效推荐',
          content: '300元/个',
        },
        {
          title: '一面通过数',
          content: '500元/个',
        },
        {
          title: '二面及以上通过数',
          content: '1000元/个',
        },
        {
          title: '谈薪数',
          content: '3000元/个',
        },
        {
          title: 'Offer数',
          content: '1000元/个',
        }
      ],
      companyInfoVisible: false,

      tableData: [
        {
          date: '2016-05-02',
          name: '抗美药业股份有限公司',
          status: '0',
          code: '91120222MA06DEQU2F',
          contactName: '张晓明',
          phone: '18569523423',
          emall: 'always_onbaby@163.com',
        },
        {
          date: '2016-05-02',
          name: '抗美药业股份有限公司',
          status: '1',
          code: '91120222MA06DEQU2F',
          contactName: '张晓明',
          phone: '18569523423',
          emall: 'always_onbaby@163.com',
        },
        {
          date: '2016-05-02',
          name: '抗美药业股份有限公司',
          status: '0',
          code: '91120222MA06DEQU2F',
          contactName: '张晓明',
          phone: '18569523423',
          emall: 'always_onbaby@163.com',
        },
        {
          date: '2016-05-02',
          name: '抗美药业股份有限公司',
          status: '0',
          code: '91120222MA06DEQU2F',
          contactName: '张晓明',
          phone: '18569523423',
          emall: 'always_onbaby@163.com',
        },
        {
          date: '2016-05-02',
          name: '抗美药业股份有限公司',
          status: '0',
          code: '91120222MA06DEQU2F',
          contactName: '张晓明',
          phone: '18569523423',
          emall: 'always_onbaby@163.com',
        },
      ],
      dockIphone: '18613155664',
      companyInfo: {
        logo:
          'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
      },
      infoVisible: false,
      editUserInfo: {},
      rules: {
        realName: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
        ],
      },
      checked: true,
    }
  },
  methods: {
    handleAvatarSuccess() {},
    deleteRow() {
      window.location.href = '/my/projectDetails?projectId=1111'
    },
  },
}
</script>
<style lang="less" scoped>
@import './watchplace.less';
</style>