<template>
  <div class="login-container">
    <el-form :model="form" size="small">
        <el-form-item label="账号" :label-width="formLabelWidth">
          <el-input v-model="form.emailAccount" auto-complete="off" autofocus="true" placeholder="请输入邮箱账号"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item class="captcha" label="验证码" :label-width="formLabelWidth">
          <el-input v-model="form.securityCode" auto-complete="off" placeholder="请输入验证码"></el-input>
        </el-form-item>
         <div class="login-bottom">
           <el-form-item label="7天免登录">
            <el-switch v-model="form.remember"></el-switch>
          </el-form-item>
          <img style="height:40px;width:100px;" @click="getImg" ref="securityCodeImg" src="http://huangchaoweb.cn/acef_sociable/visitor/getSecurityCode" alt="">
         </div>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="danger"  @click="closeDialog">取 消</el-button>
        <el-button type="primary" @click.native="login">登 陆</el-button>
      </div>
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
      formLabelWidth: '80px',
      form: {
          emailAccount: '',
          password:'',
          remember:false,
          securityCode:''
        },
    }
  },
  watch:{},
  computed:{},
  methods:{
    closeDialog(){
      this.$emit('close',false)
    },
    getImg() {
      this.$refs.securityCodeImg.src = 'http://huangchaoweb.cn/acef_sociable/visitor/getSecurityCode?d='+Date.now()*1
    },
    login () {
      const data = {
        emailAccount:this.form.emailAccount,
        password:this.form.password,
        securityCode:this.form.securityCode,
        remember:'on'
      }
      this.$store.dispatch('login',data)
    }
  },
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>
.login-container{
  .login-bottom{
    display: flex;
    justify-content: space-around;
    .el-form-item{
      width: 200px;
    }
  }
}

</style>