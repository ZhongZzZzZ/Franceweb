import Vue from 'vue'
import i18n from 'vue-i18n'
import {getCookies,setCookies} from '../api/cookie'
Vue.use(i18n)

let locale = null
const language = getCookies('language')
if(!language){
  locale = 'fr-FR'
  setCookies('language','France')
} else if(language == 'Chinese') {
  locale = 'zh-CN'
} else {
  locale = 'fr-FR'
}

export default {
  locale,
  //this.$i18n.locale 通过这个切换语言
  messages:{
    'zh-CN':require('./zh.js'),
    'fr-FR':require('./fr.js')
  }
}