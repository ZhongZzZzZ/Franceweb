<template>
  <div class="register-container">
    <el-form :model="form" :rules="rules" ref="registerRuleform" size="small">
        <el-form-item label="邮箱账号" :label-width="formLabelWidth" prop="emailAccount">
          <el-input v-model="form.emailAccount" auto-complete="off" autofocus="true" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item label="邮箱验证码" :label-width="formLabelWidth" prop="securityCode">
          <el-input v-model="form.securityCode" auto-complete="off" placeholder="请输入邮箱验证码">
            <el-button @click="getEmailCaptcha" ref="emailCaptchaBtn" :disabled="isDisabled" slot="append" class="getEmailCaptcha" :class="{disabled : isDisabled}">{{computeTime > 0 ? `已发送(${computeTime})` : '获取验证码'}}</el-button>
          </el-input>
        </el-form-item>
         <el-form-item label="昵称" :label-width="formLabelWidth" prop="userName">
          <el-input v-model="form.userName" auto-complete="off" placeholder="请输入昵称"></el-input>
        </el-form-item>
        <el-form-item label="手机号" :label-width="formLabelWidth" prop="phone">
          <el-input v-model="form.phone" auto-complete="off" placeholder="手机号(选填)"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth" prop="password">
          <el-input type="password" v-model="form.password" auto-complete="off" placeholder="6到10位字母、数字、下划线"></el-input>
        </el-form-item>
        <el-form-item label="重复密码" :label-width="formLabelWidth" prop="confirmPassword">
          <el-input type="password" v-model="form.confirmPassword" auto-complete="off" placeholder="6到10位字母、数字、下划线"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="danger" @click="closeDialog">取 消</el-button>
        <el-button type="primary" @click="register">注 册</el-button>
      </div>
  </div>
</template>

<script>
import {reqEmailCaptcha} from '../../api'
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
      } else {
          if (!/^[a-zA-Z0-9_]{6,10}$/.test(value)){
            return callback(new Error('密码需由6-10字母、数字、下划线组成'))
        } else {
          if(this.form.confirmPassword !== '') {
            this.$refs.registerRuleform.validateField('confirmPassword')
          }
        }
        callback()
      }
    }
    //重复密码验证
    var validatePass1 = (rule,value,callback) => {
      if(value === '') {
        return callback(new Error('请确认密码'))
      } else if(value !== this.form.password){
        return callback(new Error('确认密码不正确'))
      } else {
        callback()
      }
    }
    //手机验证
    var validatePhone = (rule,value,callback) => {
      if (value === '') {
        callback()
      } else if(/[^0-9]/g.test(value)) {
        return callback(new Error('手机号应填写纯数字'))
      } else if(!/^[0-9]{10,11}$/.test(value)){
        return callback(new Error('手机号个数不正确'))
      } else {
        callback()
      }
    }

    //邮箱验证码验证
    var validateEmailCaptcha = (rule,value,callback) => {
      if(!/^[0-9]{4}$/.test(value)) {
        return callback(new Error('邮箱验证码个数不正确'))
      } else {
        callback()
      }
    }

    //昵称验证
    var validateUserName = (rule,value,callback) => {
      if (value === '') {
        return callback(new Error('昵称不能为空'))
      } else if (!/^[a-zA-Z0-9_\u00C0-\u00FF\u4e00-\u9fa5]{1,10}$/.test(value)) {
        return callback(new Error('昵称只支持1到10位中英法数字下划线'))
      } else {
        callback()
      }
    }

    return {
      formLabelWidth: '120px',
      emailCaptchaBtnVal :'获取验证码',
      computeTime: 0, //验证码重新获取的倒计时时间
      isDisabled:false, //获取验证码按钮是否可用
      form: {
          emailAccount: '',
          password:'',
          confirmPassword:'', //确认密码
          phone:'',
          userName:'',
          securityCode:'' //邮箱验证码
        },
      rules: { //表单验证规则
          emailAccount: [
            { validator: validateEmailAccount, trigger: 'blur' }
          ],
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          confirmPassword: [
            { validator: validatePass1, trigger: 'blur' }
          ],
          phone: [
            { validator: validatePhone, trigger: 'blur' }
          ],
          securityCode: [
            { validator: validateEmailCaptcha, trigger: 'blur' }
          ],
          userName: [
            { validator: validateUserName, trigger: 'blur' }
          ],     
        }
    }
  },
  watch:{
    computeTime (newVal) { //根据当前计时时间决定按钮是否可用
      if(newVal>0) {
        this.isDisabled = true
      } else {
        this.isDisabled = false
      }
    }
  },
  computed:{},
  methods:{
    closeDialog () {
      this.$emit('close',false) //给父组件传值，关闭弹框
      this.$refs.registerRuleform.resetFields() //关闭前清空表单和验证提示
    },
    async getEmailCaptcha(){ //点击之后发异步请求去获取验证码，进入倒计时30s，此时按钮变得不可用
      const {emailAccount} = this.form //获取当前表单里的邮箱
      if(emailAccount === '') {
        this.$message.error('请填写邮箱')
        return  //如果邮箱没填或者格式不对就不调用
      } else if((!/^[a-zA-Z0-9][a-zA-Z0-9_-]+@[a-zA-Z0-9]+(\.[a-zA-Z]+)+$/.test(emailAccount))) {
        this.$message.error('邮箱格式不正确')
      }
      else {
        this.computeTime = 30 //30s倒计时
        this.intervalID = setInterval(() => {
          --this.computeTime
          if(this.computeTime === 0) {  //当计时为0的时候清空计时器
            clearInterval(this.intervalID)
          }
        }, 1000);
        const data = {
           emailAccount : this.form.emailAccount //准备好发送请求的对象
        }
        const result = await reqEmailCaptcha('/user/email',data)
        if(!result) {
          //网络错误的时候接收不到值
          this.computeTime = 0
          return
        }
        if(result.result == 0 ) { //根据文档 0为发送邮箱失败
          this.computeTime = 0 //这时候归零按钮，不用等倒计时结束
          this.$message.error('验证码接受失败')
        }
      }
    },
    register () {
      const {emailAccount,password,securityCode,userName,phone} = this.form
      const data = {
        emailAccount,
        password,
        securityCode,
        userName,
        phone,
      }
      if(!data.emailAccount || !data.password || !data.securityCode || !data.userName) {
        this.$message.error('请填写完整')
        return 
      } else if (this.form.confirmPassword !== data.password) {
        this.$message.error('两次密码不正确')
        return
      } else {
        this.$store.dispatch('register',data)
      }
    }

  },
  created(){},
  mounted(){}
}
</script>
<style lang="scss">
@import '../../styles/color.scss';
.register-container{
  .el-input{
    .el-input-group__append{
      border-radius: 0;
      border: 1 solid ;
      button {
        background-color: $blue ;
        border-radius: 0;
        span{
          color: #fff;
        }
      } 
      .disabled{
        background-color: $red;
        border: 0;
      }
    }
  }
}

@media (min-width: 320px) and (max-width: 767px) {
  .register-container{
    .el-form{
      .el-form-item__label{
        width: 1.64rem !important;
      }
      .el-form-item__content{
        margin-left: 1.64rem !important;
      }
    }
  }
}
</style>