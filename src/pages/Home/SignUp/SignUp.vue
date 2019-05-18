<template>
  <div class="signup-container">
    
    <div class="userInfo" v-show="(loginUser.userName)">
      <div class="signup-title">
        <h1>Welcome {{loginUser.userName}}</h1>
        <p>欢迎来到ACEF法国东部华人联谊会，现在你可以浏览网页，参加活动，下载表格了</p>
        <el-button  type="primary" round>个人中心</el-button>
        <el-button  type="danger" round  @click="logOut">退出登陆</el-button>
      </div>
    </div>
    <div class="btn" v-show="!(loginUser.userName)">
      <div class="signup-title">
        <h1>Join Us</h1>
        <p>欢迎来到ACEF法国东部华人联谊会，赶紧进行注册加入我们的大家庭吧</p>
      </div>
      <el-button round type="primary"  @click="showLogin = true">登陆</el-button>
      <el-button round type="success" @click="showRegister = true">注册</el-button>
      <el-button round type="warning" >忘记密码</el-button>
    </div>
    <el-dialog class="dialog" title="登陆" :visible.sync="showLogin"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :show-close="false"
    >
      <login @close="close"></login>
    </el-dialog>
    <el-dialog class="dialog" title="注册" :visible.sync="showRegister"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :show-close="false"
    >
      <register @close="close"></register>
    </el-dialog>
    <hr>
    <div class="sign-language">
      <h1>Choose Language</h1>
      <el-button round type="primary">Français</el-button>
      <el-button round type="danger">中文</el-button>
      <el-button round type="primary" plain>English</el-button>
    </div>
  </div>
</template>

<script>
import Login from '../../Login/Login.vue'
import Register from '../../Register/Register.vue'
import {mapState} from 'vuex'
export default {
  components:{
    Login,
    Register
  },
  props:{},
  data(){
    return {
      showLogin:false, //控制登陆弹框
      showRegister:false //控制注册弹框
  }
  },
  watch:{
  },
  computed:{
    ...mapState(['loginUser']),
    
  },
  methods:{
    close(isClose){
      this.showRegister = isClose
      this.showLogin = isClose
    },
    logOut() {
      this.$confirm('此操作将退出登陆, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center:true,
          closeOnClickModal:false
        }).then(() => {
          this.$store.dispatch('logOut')
          this.$message({
            type: 'success',
            message: '退出登陆!'
          });
        }).catch(()=>{})
    }
  },
  created(){},
  mounted(){}
}
</script>
<style lang="scss">
@import '../../../styles/color.scss';
.signup-container{
  text-align: center;
  height: 6rem;
  margin-bottom: 1.5rem;
  h1{
      color:$blue;
      font-size: 36px;
      margin-bottom: .4rem;
      color: $blue;
      -moz-box-shadow:0px 0px 3px #333333; -webkit-box-shadow:0px 0px 1px #333333; box-shadow:0px 0px 3px #333333; //这里改阴影
    }
  .signup-title{
    p{
      line-height: 20px;
      padding: 0 40px;
      padding-bottom:.4rem;
    }
  }
  .btn{
    padding-bottom: 0.3rem;
  }
  .dialog{
    overflow: hidden;
    .el-dialog{
      background-color: lightgray;
      width: 10rem;
      .el-dialog__header{
        background-color: $blue;
        .el-dialog__title{
          color: #fff;
        }
      }
    }
  }
}

/* //各种屏幕下弹框宽度
@media (min-width: 320px) and (max-width: 767px) {
  .signup-container{
    .dialog{
      .el-dialog{
        width: 80.5%;
      }
    }
  }
}

@media (min-width: 768px) and (max-width: 1200px) {
  .signup-container{
    .dialog{
      .el-dialog{
        width: 50%;
      }
    }
  }
} */

</style>