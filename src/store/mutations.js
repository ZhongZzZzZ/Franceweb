import {SUBMIT_REGISTER, SUBMIT_LOGIN, RECIEVE_LOGIN, QUIT_LOGIN} from './mutation-types'

export default {
  [SUBMIT_REGISTER] (state,user) { 
    state.registerUser = user
  },
  [SUBMIT_LOGIN] (state,user) { 
    state.loginUser = user
  },
  [RECIEVE_LOGIN] (state,user) { 
    state.loginUser = user
  },
  [QUIT_LOGIN] (state) { 
    state.loginUser = {}
    state.registerUser = {}
  },
}