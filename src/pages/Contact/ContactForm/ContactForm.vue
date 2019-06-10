<template>
  <div class="contact-form">
      <p>你也可以用邮箱联系我们: acef@orange.fr 或者 填写下面的联系表格:</p>
      <el-form :model="contactForm" :rules="rules"  ref="contactForm"  class="contactForm" size="small">
        <div class="contactForm-left">
          <el-form-item prop="name"><el-input class="contact-input" v-model="contactForm.name" placeholder="姓名"></el-input></el-form-item>
          <el-form-item prop="email"><el-input class="contact-input" v-model="contactForm.email" placeholder="邮箱"></el-input></el-form-item>
          <el-form-item prop="subject"><el-input class="contact-input" v-model="contactForm.subject" placeholder="标题"></el-input></el-form-item>
          <el-form-item prop="phone"><el-input class="contact-input" v-model="contactForm.phone" placeholder="手机号"></el-input></el-form-item>
        </div>
        <div class="contactForm-right">
          <el-form-item prop="message"><el-input class="contact-input" :rows="6" type="textarea" v-model="contactForm.message" placeholder="您的宝贵意见或联系内容"></el-input></el-form-item>
          <el-button class="contact-button" type="danger" @click="submitForm('contactForm')">发送</el-button>
        </div>
    </el-form>
  </div>
</template>

<script>
import { reqContactForm } from '@/api';
export default {
  components:{},
  props:{},
  data(){
    var validateName = (rule, value, callback) => {
      if(value === '') {
       callback(new Error('Name cannot be empty'))
      } else {
        callback()
      }
    }
    var validateEmail = (rule, value, callback) => {
      if(value == '') {
         callback(new Error('E-mail cannot be empty'))
      } else if(!/^[a-zA-Z0-9][a-zA-Z0-9_-]+@[a-zA-Z0-9]+(\.[a-zA-Z]+)+$/.test(value)){
         callback(new Error('E-mail format is incorrect'))
      }else{
        callback()
      }
    }
    var validateSubject = (rule, value, callback) => {
        if(value === '') {
          callback(new Error('Title cannot be empty'))
        } else {
          callback()
        }
    }
    var validateMessage = (rule, value, callback) => {
      if(value == '') {
        callback(new Error('Message cannot be empty'))
      } else {
        callback()
      }
    }
    var validatePhone = (rule,value,callback) => {
      if (value === '') {
        callback(new Error('Mobile phone number cannot be empty'))
      } else if(/[^0-9]/g.test(value)) {
        return callback(new Error('Mobile phone number should be filled in with pure numbers'))
      } else if(!/^[0-9]{10,11}$/.test(value)){
        return callback(new Error('The number of mobile phone numbers is incorrect'))
      } else {
        callback()
      }
    }
    return {
      contactForm :{
        name:'',
        email:'',
        subject:'',
        message:'',
        phone:''
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
        phone: [
          { validator: validatePhone, trigger: 'blur' }
        ],
      }
    }
  },
  watch:{},
  computed:{},
  methods:{
    submitForm(refName) {
      this.$refs[refName].validate(async (valid) =>{
        if(valid) {
          const data = {
            userName:this.contactForm.name,
            emailAccount:this.contactForm.email,
            title:this.contactForm.subject,
            description:this.contactForm.message,
            phone:this.contactForm.phone
          }
          const result = await reqContactForm('/fb/u',data)
          if(!result) {
            this.$message.error('Network Error')
          } else if(result.result == 1) {
            this.$message.success('success')
          } else {
            this.$message.error('Submit failed, please try again later')
          }
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
@import '@/styles/color.scss';
 .contact-form{
    width: 100%;
    margin-top: 1rem;
    background-color: $lightYellow;
    /* height: 8.28rem; */
    box-sizing: border-box;
    text-align: center;
    overflow: hidden;
    padding: 0 3.5rem;
    p{
      margin: 1rem 0 0 ;
      color: #ffffff;
      font-size: 16px;
    }
    .contactForm{
      display: flex;
      justify-content: space-between;
      padding: 1rem 3.5rem;
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
      }
      .contact-button{
          width: 100px;
          border-radius: 0;
          line-height: .32rem;
      }
      .contactForm-left{
        width: 8rem;
      }.contactForm-right{
        width: 8rem;
      }
    }
  }
</style>