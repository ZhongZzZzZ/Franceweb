import {reqRegister, reqLogin} from '../api'
import {SUBMIT_REGISTER, SUBMIT_LOGIN} from './mutation-types'
export default {
  async register({commit},registerInfo) { //进行注册请求
    const user = await reqRegister('/register',registerInfo)
    commit(SUBMIT_REGISTER,user)
  },
  async login({commit},loginInfo) { //进行登陆请求
    const user = await reqLogin('/login',loginInfo)
    commit(SUBMIT_LOGIN,user)
  },
}