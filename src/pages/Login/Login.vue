<template>
  <div class="login-container">
    <el-form :model="form">
        <el-form-item label="账号" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off" autofocus="true"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="form.password" ></el-input>
        </el-form-item>
        <el-form-item class="captcha" label="验证码" :label-width="formLabelWidth">
          <el-input v-model="form.securityCode" auto-complete="off"></el-input>
        </el-form-item>
         <div class="login-bottom">
           <el-form-item label="记住密码">
            <el-switch v-model="form.remenber"></el-switch>
          </el-form-item>
          <img style="height:50px;width:100px;" onclick="this.src='http://huangchaoweb.cn/acef_sociable/visitor/getSecurityCode?d='+new Date()*1"  src="http://huangchaoweb.cn/acef_sociable/visitor/getSecurityCode" alt="">
         </div>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">取 消</el-button>
        <el-button type="primary" @click="closeDialog">登 陆</el-button>
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
          name: '',
          password:'',
          remenber:false,
          securityCode:''
        },
    }
  },
  watch:{},
  computed:{},
  methods:{
    closeDialog(){
      this.$emit('close',false)
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