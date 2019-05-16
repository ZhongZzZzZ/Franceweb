<template>
  <div class="contact-form">
    <el-row>
      <el-col :xs="3" :span="5" style="height: 300px;">&nbsp;</el-col>
      <el-col :xs="18" :span="14" style="height: 300px;">
        <p>You can also email us at: flowers@mockingbot.com or fill in our contact form:</p>
        <el-form :model="contactForm" :rules="rules"  ref="contactForm"  class="contactForm" size="small">
        <el-row>
          <el-col :span="11">
            <el-form-item prop="name"><el-input class="contact-input" v-model="contactForm.name" placeholder="Name"></el-input></el-form-item>
            <el-form-item prop="email"><el-input class="contact-input" v-model="contactForm.email" placeholder="Email"></el-input></el-form-item>
            <el-form-item prop="subject"><el-input class="contact-input" v-model="contactForm.subject" placeholder="Subject"></el-input></el-form-item>
          </el-col>
          <el-col :span="2">&nbsp;</el-col>
          <el-col :span="11">
            <el-form-item prop="message"><el-input class="contact-input" :rows="6" type="textarea" v-model="contactForm.message" placeholder="Message"></el-input></el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :xs="18" :span="20">&nbsp;</el-col>
          <el-col :xs="6" :span="4"><el-button class="contact-button" type="danger" @click="submitForm('contactForm')">Send</el-button></el-col>
        </el-row>
      </el-form>
      </el-col>
      <el-col :xs="3" :span="5" style="height: 300px;">&nbsp;</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    var validateName = (rule, value, callback) => {
      if(value === '') {
       callback(new Error('姓名不能为空'))
      } else {
        callback()
      }
    }
    var validateEmail = (rule, value, callback) => {
      if(value == '') {
         callback(new Error('邮箱不能为空'))
      } else if(!/^[a-zA-Z0-9][a-zA-Z0-9_-]+@[a-zA-Z0-9]+(\.[a-zA-Z]+)+$/.test(value)){
         callback(new Error('邮箱格式不正确'))
      }else{
        callback()
      }
    }
    var validateSubject = (rule, value, callback) => {
        callback()
    }
    var validateMessage = (rule, value, callback) => {
      if(value == '') {
        callback(new Error('内容不能为空'))
      } else {
        callback()
      }
    }
    return {
      contactForm :{
        name:'',
        email:'',
        subject:'',
        message:''
      },
      rules:{
        name: [
          { validator: validateName, trigger: 'blur' }
        ],
        email: [
          { validator: validateEmail, trigger: 'blur' }
        ],
        subject: [
          { validator: validateSubject, trigger: 'blur' }
        ],
        message: [
          { validator: validateMessage, trigger: 'blur' }
        ],
      }
    }
  },
  watch:{},
  computed:{},
  methods:{
    submitForm(refName) {
      this.$refs[refName].validate((valid) =>{
        if(valid) {
          this.$message.success('提交成功')
        } else {
          return 
        }
      })
    }
  },
  created(){},
  mounted(){}
}
</script>
<style lang="scss">
@import '../../../styles/color.scss';
 .contact-form{
    width: 100%;
    margin: 1rem 0 2.4rem;
    background-color: $lightYellow;
    height: 8.28rem;
    p{
      margin: 2rem 0 .3rem;
      color: #fff;
      font-size: 16px;
    }
    .contact-input{
      input,textarea{
        background-color: transparent;
        border-radius: 0;
        border: 1px solid #fff;
        resize: none;
        //placeholder样式修改
        &::-webkit-input-placeholder{ //谷歌
          color: #fff;
        }
        &::-moz-placeholder{ //火狐19+
          color: #fff;
          font-weight: bold;
        }
        &:-ms-input-placeholder{ //ie10+
          color: #fff;
        }
        &:-moz-placeholder{ //火狐4-18
          color: #fff;
        }
      }
      textarea{
        height: 2.74rem;
      }
    }
    .contact-button{
        width: 100%;
        height: 100%;
        border-radius: 0;
        line-height: .32rem;
      }
  }
</style>