<template>
  <div class="login-container">
    <el-form :model="form" :rules="rules" size="small" ref="loginForm">
        <el-form-item label="账号" :label-width="formLabelWidth" prop="emailAccount">
          <el-input v-model="form.emailAccount" auto-complete="off" autofocus="true" placeholder="请输入邮箱账号"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth" prop="password">
          <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item class="captcha" label="验证码" :label-width="formLabelWidth" prop="securityCode">
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
        <el-button type="primary" @click="submitRegisterForm('loginForm')">登 陆</el-button>
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
    //邮箱验证
    var validateEmailAccount = (rule,value,callback) => {
      if(value === '') {
        return callback(new Error('邮箱账号不能为空'))
      } else if(!/^[a-zA-Z0-9][a-zA-Z0-9_-]+@[a-zA-Z0-9]+(\.[a-zA-Z]+)+$/.test(value)){
        return callback(new Error('邮箱格式不正确'))
      }else{
        callback()
      }
    }
    //密码验证
    var validatePass = (rule,value,callback) => {
      if(value === '') {
        return callback(new Error('密码不能为空'))
      } else if (!/^[a-zA-Z0-9_]{6,10}$/.test(value)){
        return callback(new Error('密码需由6-10字母、数字、下划线组成'))
      } else {
        callback()
      } 
    }
    //图片验证码验证
    var validateSecurityCode = (rule,value,callback) => {
      if(value === '') {
        return callback(new Error('验证码不能为空'))
      } else if(!/^[a-zA-Z0-9]{4}$/.test(value)) {
        return callback(new Error('验证码格式不正确'))
      } else {
        callback()
      }
      
    }
    return {
      formLabelWidth: '80px',
      pic:null, //存放登陆验证码的地址
      form: {
          emailAccount: '',
          password:'',
          remember:false,
          securityCode:''
        },
      rules: { //表单验证规则
          emailAccount: [
            { validator: validateEmailAccount, trigger: 'blur' }
          ],
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          securityCode: [
            { validator: validateSecurityCode, trigger: 'blur' }
          ]   
        }
    }
  },
  watch:{
    loginUser() { //登陆成功的时候有变化，关闭登陆框
      this.closeDialog()
    }
  },
  computed:{
    ...mapState(['loginUser'])
  },
  methods:{
    closeDialog(){
      this.$refs.loginForm.resetFields()
      this.$emit('close',false) //给父组件传值，关闭弹框
    },
    getImg() { //请求验证码图片，得到blob格式进行转换成图片
      axios.get('/user/getSecurityCode?d='+Date.now()*1,{responseType: 'blob'}).then(res => {
        const qrUrl = window.URL.createObjectURL(res.data)
        this.pic = qrUrl
        this.$refs.securityCodeImg.onload = function () {
        window.URL.revokeObjectURL(qrUrl)
      }
      }).catch(err => {
        console.log(err);
      })
    },
    submitRegisterForm(formName) {
      this.$refs[formName].validate((valid) => {
          if (valid) {
            const data = {
              emailAccount:this.form.emailAccount,
              password:this.form.password,
              securityCode:this.form.securityCode,
              remember:this.form.remember ? 'on' : ''
            }  
            this.$store.dispatch('login',data)
          } else {
            return false;
          }
        })
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