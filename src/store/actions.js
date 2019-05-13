import {reqRegister, reqLogin, reqIsLogin} from '../api'
import {SUBMIT_REGISTER, SUBMIT_LOGIN, RECIEVE_LOGIN, QUIT_LOGIN} from './mutation-types'
export default {
  async register({commit},registerInfo) { //进行注册请求
    const user = await reqRegister('/register',registerInfo)
    commit(SUBMIT_REGISTER,user)
  },
  async login({commit},loginInfo) { //进行登陆请求
    const user = await reqLogin('/login',loginInfo)
    commit(SUBMIT_LOGIN,user)
  },
  async isLogin({commit}) { //查询是否免登陆请求
    const user = await reqIsLogin('/isLogin')
    commit(RECIEVE_LOGIN,user)
  },
  logOut({commit}) { //退出登陆
    commit(QUIT_LOGIN)
  },
}