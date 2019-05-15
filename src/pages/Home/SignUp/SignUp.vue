<template>
  <div class="signup-container">
    <div class="userInfo" v-if="(loginUser.userName || registerUser.userName)">
      欢迎 {{userInfo.userName}}
      <el-button type="danger" @click="logOut">退出登陆</el-button>
    </div>
    <div class="btn" v-else>
      <el-button type="primary"  @click="showLogin = true">登陆</el-button>
      <el-button type="primary" @click="showRegister = true">注册</el-button>
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
  watch:{},
  computed:{
    ...mapState(['loginUser','registerUser']),
    userInfo () {
      return this.loginUser.userName ? this.loginUser : this.registerUser
    }
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
          type: 'warning'
        }).then(() => {
          this.$store.dispatch('logOut')
          this.$message({
            type: 'success',
            message: '退出登陆!'
          });
        })
    }
  },
  created(){},
  mounted(){}
}
</script>
<style lang="scss">
@import '../../../styles/color.scss';
.signup-container{
  background-color: lightblue;
  text-align: center;
  .dialog{
    .el-dialog{
      background-color: lightgray;
      width: 30%;
      .el-dialog__header{
        background-color: $blue;
        .el-dialog__title{
          color: #fff;
        }
      }
      .dialog-footer{
        button{
          &:nth-child(2){
            background-color: $blue;
            border-color: $blue; 
          }
        }
      }
    }
  }
}

//各种屏幕下弹框宽度
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
}

</style>