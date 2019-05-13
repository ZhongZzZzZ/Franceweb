<template>
  <div>
    <el-form :model="form" :rules="rules" ref="ruleform">
        <el-form-item label="账号" :label-width="formLabelWidth" prop="emailAccount">
          <el-input v-model="form.emailAccount" auto-complete="off" autofocus="true" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item label="邮箱验证码" :label-width="formLabelWidth" prop="emailCaptcha">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号" :label-width="formLabelWidth" prop="phone">
          <el-input v-model="form.phone" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth" prop="passWord">
          <el-input type="password" v-model="form.phone" auto-complete="off" placeholder="手机号，选填"></el-input>
        </el-form-item>
        <el-form-item label="重复输入密码" :label-width="formLabelWidth" prop="confirmPassword">
          <el-input type="password" v-model="form.confirmPassword" auto-complete="off" placeholder="6到10位字母数字符号"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">取 消</el-button>
        <el-button type="primary" @click="closeDialog">注 册</el-button>
      </div>
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    var validateEmailAccount = (rule,value,callback) => {
      if(value === '') {
        return callback(new Error('账号不能为空'))
      } else if(!/^[a-zA-Z0-9_]{6,15}$/.test(value)){
        return callback(new Error('账号需由6-15位字母、数字、下划线组成'))
      }else{
        callback()
      }
    }
    var validatePass = (rule,value,callback) => {
      if(value === '') {
        return callback(new Error('密码不能为空'))
      } else {
          if (!/^[a-zA-Z0-9_]{6,10}$/.test(value)){
            return callback(new Error('密码需由6-10字母、数字、下划线组成'))
        } else {
          if(this.form.confirmPassword !== '') {
            console.log(1);
            this.$refs.ruleform.validateField('confirmPassword')
          }
        }
        callback()
      }
    }
    var validatePass1 = (rule,value,callback) => {
      if(value === '') {
        return callback(new Error('请确认密码'))
      } else if(value !== this.form.passWord){
        return callback(new Error('确认密码不正确'))
      } else {
        callback()
      }
    }

    return {
      formLabelWidth: '120px',
      form: {
          emailAccount: '',
          passWord:'',
          confirmPassword:'', //确认密码
          phone:'',
          emailCaptcha:'' //邮箱验证码
        },
      rules: {
          emailAccount: [
            { validator: validateEmailAccount, trigger: 'blur' }
          ],
          passWord: [
            { validator: validatePass, trigger: 'blur' }
          ],
          confirmPassword: [
            { validator: validatePass1, trigger: 'blur' }
          ] 
        }
    }
  },
  watch:{},
  computed:{},
  methods:{
    closeDialog(){
      this.$emit('close',false)
      this.$refs.ruleform.resetFields()
    }
  },
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>

</style>