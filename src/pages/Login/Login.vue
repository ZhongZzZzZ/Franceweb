<template>
  <div class="login-container">
    <el-form :model="form" size="small" ref="loginRuleForm">
        <el-form-item label="账号" :label-width="formLabelWidth">
          <el-input v-model="form.emailAccount" auto-complete="off" autofocus="true" placeholder="请输入邮箱账号"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item class="captcha" label="验证码" :label-width="formLabelWidth">
          <el-input v-model="form.securityCode" auto-complete="off" placeholder="不区分大小写"></el-input>
        </el-form-item>
         <div class="login-bottom">
           <el-form-item label="7天免登录">
            <el-switch v-model="form.remember"></el-switch>
          </el-form-item>
          <img style="height:40px;width:100px;" @click="getImg" ref="securityCodeImg" :src="pic" alt="验证码">
         </div>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="danger"  @click="closeDialog">取 消</el-button>
        <el-button type="primary" @click="login">登 陆</el-button>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from "vuex"
export default {
  components:{},
  props:{},
  data(){
    return {
      formLabelWidth: '80px',
      pic:null, //存放登陆验证码的地址
      form: {
          emailAccount: '',
          password:'',
          remember:false,
          securityCode:''
        },
    }
  },
  watch:{
    loginUser() {
      this.closeDialog()
    }
  },
  computed:{
    ...mapState(['loginUser'])
  },
  methods:{
    closeDialog(){
      this.$emit('close',false) //给父组件传值，关闭弹框
      this.$refs.loginRuleform.resetFields() //关闭前清空表单和验证提示
    },
    getImg() {
      axios.get('/acef/user/getSecurityCode?d='+Date.now()*1,{responseType: 'blob'}).then(res => {
        const qrUrl = window.URL.createObjectURL(res.data)
        this.pic = qrUrl
        this.$refs.securityCodeImg.onload = function () {
        window.URL.revokeObjectURL(qrUrl)
      }
      }).catch(err => {
        console.log(err);
      })
    },
    login () {
      const data = {
        emailAccount:this.form.emailAccount,
        password:this.form.password,
        securityCode:this.form.securityCode,
        remember:this.form.remember ? 'on' : ''
      }
      //进行登陆的表单验证
      if(!data.emailAccount || !data.password || !data.securityCode) {
        //如果有一个为空 都会弹出错误
        this.$message.error('请填写完整')
      } else if((!/^[a-zA-Z0-9][a-zA-Z0-9_-]+@[a-zA-Z0-9]+(\.[a-zA-Z]+)+$/.test(data.emailAccount))) {
        this.$message.error('邮箱格式不正确')
        return 
      } else if (!/^[a-zA-Z0-9_]{6,10}$/.test(data.password)) {
        this.$message.error('密码需由6-10字母、数字、下划线组成')
        return
      } else if (!/^[a-zA-Z0-9]{4}$/.test(data.securityCode)) {
        this.$message.error('验证码格式不正确')
        return
      }
      else {
        this.$store.dispatch('login',data)
      }
    }
  },
  created(){},
  mounted(){
    this.getImg()
  }
}
</script>
<style lang="scss">
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