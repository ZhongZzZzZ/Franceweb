<template>
  <div class="signup-container">
    <el-button type="text" @click="showLogin = true">登陆</el-button>
    <el-button type="text" @click="showRegister = true">注册</el-button>
    <el-dialog class="dialog" title="登陆" :visible.sync="showLogin"
    :modal="false"
    >
      <login @close="close"></login>
    </el-dialog>
    <el-dialog class="dialog" title="注册" :visible.sync="showRegister"
    :modal="false"
    >
      <register @close="close"></register>
    </el-dialog>
  </div>
</template>

<script>
import Login from '../../Login/Login.vue'
import Register from '../../Register/Register.vue'
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
  computed:{},
  methods:{
    close(isClose){
      this.showRegister = isClose
      this.showLogin = isClose
    }
  },
  created(){},
  mounted(){
  }
}
</script>
<style lang="scss">
.signup-container{
  height: 50px;
  background-color: lightblue;
  text-align: center;
  margin-bottom: 50px;
  .dialog{
    .el-dialog{
      background-color: lightgray;
      width: 30%;
    }
  }
}
@media (min-width: 992px) and (max-width: 1200px) {
  .signup-container{
    .dialog{
      .el-dialog{
        
      }
    }
  }
}
</style>