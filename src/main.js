import Vue from 'vue'
import i18n from './lang/index'
import App from './App.vue'
import router from './route/router'
import './styles/reset.css'
import './js/rem'
import ElementUI from 'element-ui'
import '../theme/index.css'
import 'element-ui/lib/theme-chalk/display.css';
import axios from 'axios'




Vue.prototype.$axios = axios;
Vue.use(ElementUI)
Vue.config.productionTip = false
if(process.env.NODE_ENV == "development"){
    axios.defaults.baseURL = "/acef";
}
else if(process.env.NODE_ENV == "debug"){
    axios.defaults.baseURL = "";
}
else if(process.env.NODE_ENV == "production"){
    axios.defaults.baseURL = "http://huangchaoweb.cn:8080/acef";
}

router.beforeEach((to,from,next) => {
  if(to.path !== '/article') {
    document.title = 'ACEF法国东部华人协会'
  }
  next()
})
axios.defaults.withCredentials=true
new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
