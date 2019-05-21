import Vue from 'vue'
import i18n from 'vue-i18n'
Vue.use(i18n)

let locale = null
if(!localStorage.getItem('locale')){
  locale = 'zh-CN'
} else {
  locale = localStorage.getItem('locale')
}


export default {
  locale,
  //this.$i18n.locale 通过这个切换语言
  messages:{
    'zh-CN':require('./zh.js'),
    'en-US':require('./en.js'),
    'fr-FR':require('./fr.js')
  }
}