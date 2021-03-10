<template>
  <div class="home">
    <BasePageHeader>
      <div class="header-heading">
        <span class="header-heading-title">工作台</span>
      </div>
      <div class="header-content">
        <div class="header-wrap-row">
          <div class="left-content">
            <div class="avatar">
              <el-image :class="['avatar-img']" :src="currentUser.avatar" fit="cover"></el-image>
            </div>
            <div class="content">
              <div class="content-title">
                {{ timeFix }}，{{ userInfo.name }}
                <span class="welcome-text">，{{ welcome }}</span>
              </div>
              <div>{{userInfo.position}}</div>
            </div>
          </div>
          <div class="right-extra">
            <div class="extra-content">
              <div class="stat-item">
                <div class="item-statistic">
                  <div class="statistic-title">项目数</div>
                  <div class="statistic-content">
                    <span class="content-value">60</span>
                  </div>
                </div>
              </div>
              <div class="stat-item">
                <div class="item-statistic">
                  <div class="statistic-title">团队内排名</div>
                  <div class="statistic-content">
                    <span class="content-value">60</span>
                    <span class="content-value-suffix">/24</span>
                  </div>
                </div>
              </div>
              <div class="stat-item">
                <div class="item-statistic">
                  <div class="statistic-title">项目数</div>
                  <div class="statistic-content">{{20000 | NumberFormat}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BasePageHeader>
    <!-- <div class="grid-content">
      <div class="children-content">
        <el-row :gutter="24">
          <el-col :xs="24" :sm="16" :md="16">
            <el-card>1</el-card>
          </el-col>
          <el-col :xs="24" :sm="8" :md="8">
            <el-card>2</el-card>
          </el-col>
        </el-row>
      </div>
    </div> -->
    <!-- {{msg | moment}}
    <el-button type="primary" @click="handleLogout">退出</el-button>-->
    <div class='agreement-content'>
      <h3 class='title'>委托服务协议</h3>
      <p class='text'><b class='holder-space'></b>欢迎您与我司【湖南全猎】合作伙伴【全猎平台会员企业】（以下简称为“合作公司”）签署本《项目委托服务协议》（下称“本协议”）并提供服务。</p>
      <p class='text'>【审慎阅读】为维护您的自身权益，在您点击同意或书面签署本协议之前，请认真阅读本协议，务必审慎阅读、充分理解各条款内容，特别是权利义务条款、法律适用和管辖条款。</p>
      <p class='text'>【签约】当您按照提示填写您的个人信息、阅读并同意本协议且完成全部申请或书面签署后，即表示您已充分阅读、理解并接受本协议的全部内容，与我司合作公司达成一致意见并成为我司合作公司的合作人员，此后您不得以未阅读/不理解本协议内容或类似言辞做任何形式的抗辩。阅读本协议的过程中，如果您不同意本协议或其中任何条款约定，请您立即停止任何的申请/注册/或书面签署程序。</p>
      <p class='text'>【合作关系】您与我司合作公司通过本协议建立合作关系，适用《合同法》《民法总则》和其他民事法律，不适用《劳动合同法》。</p>
      <p class='text'>协议条款：<br/>您与我司合作公司通过本协议建立合作关系，适用《合同法》《民法总则》和其他民事法律，不适用《劳动合同法》。</p>
      <h4 class='title_sub'>一、服务内容：</h4>
      <p class='text'>1.1 因合作公司服务合作需要，特委托您按照合作公司相关合同的规定提供【职位发布】服务。</p>
      <p class='text'>1.2 您应按照合作公司相关要求规定的标准完成工作。</p>
      <p class='text'>1.3 您承诺和保证，您具有提供本协议服务所对应的相应资质和专业能力，您依据本合同约定收取相关费用不违反任何法律法规和政策规定。若依据相关规定，您提供的相关服务和收费，应通过所在机构或以其他法律规定的方式进行，则您自行负责办理全部事宜，若因您的自身原因未办理前述事宜，则您应承担由此引起的全部法律后果，并赔偿由此给合作公司造成的全部经济损失。</p>
      <h4 class='title_sub'>二、甲乙双方的权利和义务：</h4>
      <p class='text'>2.1 甲方为乙方提供完成项目所必要的条件和资料。</p>
      <p class='text'>2.2 未经双方协商一致，均不得无故变更合同条款。</p>
      <p class='text'>2.3 未经双方协商一致，均不得无故变更合同条款。</p>
      <p class='text'>2.3 乙方在甲方指导意见下，负责委托项目的具体实施。并严格按照甲方的要求完成项目其他各方面的工作。</p>
      <p class='text'>2.3 乙方应按照协议约定的方式和标准，交付项目成果。</p>
      <h4 class='title_sub'>三、违约责任：</h4>
      <p class='text'>3.1 双方应按本协议约定履行，如有违反，守约方有权要求对方及时改正；造成对方损失的，守约方有权要求违约方赔偿。</p>
      <p class='text'>3.2 因不可抗力造成损失的，彼此不负赔偿责任，但发生不可抗力一方应及时将有关情况通知另一方，并尽最大努力进行补救。本协议所称不可抗力是指不能预见、不能克服并不能避免且对一方当事人造成重大影响的客观事件，包括但不限于自然灾害如洪水、地震、火灾和风暴等以及社会事件如战争、动乱、政府行为、黑客事件、大范围电信事故等。</p>
      <h4 class='title_sub'>四、其他：</h4>
      <p class='text'>4.1 本协议自签订之日起生效，协议履行期间，双方均不得随意变更或解除协议。</p>
      <p class='text'>4.2 我司有权根据业务需要修改本协议条款。</p>
      <p class='text'>4.3 因履行本协议发生的纠纷，双方应友好协商解决，协商不成的，提请合作公司所在地人民法院诉讼解决。</p>
      <p class='text name'>甲方(委托方)：三生三世</p>
      <p class='text name'>乙方(受托方)：全猎平台会员企业</p>
      <p class='text date'>2020年01月02日</p>
    </div>
  </div>
</template>

<script>
import { timeFix } from '@/utils/util'
import { mapState } from 'vuex'
export default {
  name: 'Workplace',
  components: {},
  computed: {
    ...mapState({
      nickname: (state) => state.user.nickname,
      welcome: (state) => state.user.welcome,
    }),
    currentUser() {
      return {
        name: 'Serati Ma',
        avatar:
          'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
      }
    },
    userInfo() {
      return this.$store.getters.userInfo
    },
  },
  created() {
    // console.log(this.nickname)
    // this.user = this.userInfo
    // this.avatar = this.userInfo.avatar
  },
  mounted() {
    this.getCount()
    // console.log()
  },
  data() {
    return {
      timeFix: timeFix(),
      avatar: '',
      user: {},
      msg: new Date(),
    }
  },
  methods: {
    getCount() {
      let ary = [5.26,82.97,3.33,83.99,2.5,9,11,4,2.5,4,12.9,7,8,120,12,15,7,16,16,18.58,1,12,14.78,116.70,86,200,120.28,12,7,21.6,3,7,1,7,9,3,2.5,312.04,20,100,213.99,477.99,45,100,54,16,176.85,12,2.5,2.5,7,28.7,49.9,2.5,7,2.5,12,30,99.8,29,202.4,2.5,2.5,14.68,2.5,2.5,10,5,97,2.5]
      let count = ary.reduce((a,b) =>  a + b)
      console.log(count)
    },
    handleLogout() {
      this.$store
        .dispatch('Logout')
        .then(() => {})
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
</script>
<style lang="less" scoped>
@import './workplace.less';
</style>
