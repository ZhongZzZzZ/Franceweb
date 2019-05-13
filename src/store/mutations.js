import {SUBMIT_REGISTER, SUBMIT_LOGIN} from './mutation-types'

export default {
  [SUBMIT_REGISTER] (state,user) { 
    state.registerUser = user
  },
  [SUBMIT_LOGIN] (state,user) { 
    state.loginUser = user
  },
}