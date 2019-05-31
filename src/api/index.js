import ajax from './ajax'
/*
这里的参数url是接口 visitor 后面的内容
举个例子
http://huangchaoweb.cn/acef_sociable/visitor/email

url为 /email 这个字符串

data是一个对象

继续是上面接口的例子，传递邮箱这个参数

在使用reqEmailCaptcha之前定义好一个对象

const data = {
  emailAccount = this.form.emailAccount
}

再把data传进reqEmailCaptcha

第三个参数是请求方式

不填的话默认为'get'，如果要用post就 'post'


在需要用方法的组件上引入
import {reqEmailCaptcha,xxxxx,xxxx,xxxx} from 
*/


 //请求邮箱验证码
export const reqEmailCaptcha = (url,data) => ajax(url,data)

//请求注册
export const reqRegister = (url,data) => ajax(url,data,'post')

//请求登陆
export const reqLogin = (url,data) => ajax(url,data,'post')

//查询是否登陆状态
export const reqIsLogin = (url) => ajax(url)

//联系我们的表单提交
export const reqContactForm = (url,data) => ajax(url,data,'post')

//请求文章
export const reqArticle = (url,data) => ajax(url,data)

//发送当前语言给后台
export const reqLanguage = (url,data) => ajax(url,data)

//获取协会成员
export const reqMembersList = (url) => ajax(url)

//获取首页轮播图图片
export const reqCarousel = (url) => ajax(url)