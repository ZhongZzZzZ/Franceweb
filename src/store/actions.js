import { reqLogin, reqIsLogin} from '../api'
import { SUBMIT_LOGIN, RECIEVE_LOGIN, QUIT_LOGIN} from './mutation-types'

import Vue from 'vue' //在单独js文件中使用elementui的js组件的方法
const v = new Vue()

export default {
  async login({commit},loginInfo) { //进行登陆请求
    const user = await reqLogin('/user/login',loginInfo)
    console.log(user);
    if(user == undefined) { //对结果进行判断，只有返回1才算登陆成功 ，拿到了用户昵称信息
      v.$message.error('登陆失败，请稍后重试')
      return
    }
    switch (user.result) {
      case '1':
        v.$message.success('登陆成功')
        commit(SUBMIT_LOGIN,user)
        break;
      case '4':
        v.$message.error('验证码错误')
        break;
      case '2':
        v.$message.error('密码错误')
          break;
        case '3':
        v.$message.error('未找到该用户')
        break;
      case '6':
        v.$message.error('验证码超时或未生成验证码')
        break;
      default:
        break;
    }
    
  },
  async isLogin({commit}) { //查询是否免登陆请求
    const user = await reqIsLogin('/user/isLogin')
    if(user == undefined) {
      v.$message('网络错误')
      return
    }
    commit(RECIEVE_LOGIN,user)
  },
  logOut({commit}) { //退出登陆
    commit(QUIT_LOGIN)
  },
}