import {SUBMIT_LOGIN, RECIEVE_LOGIN, QUIT_LOGIN} from './mutation-types'

export default {
  [SUBMIT_LOGIN] (state,user) { 
    state.loginUser = user
  },
  [RECIEVE_LOGIN] (state,user) { 
    state.loginUser = user
  },
  [QUIT_LOGIN] (state) { 
    state.loginUser = {}
  },
}