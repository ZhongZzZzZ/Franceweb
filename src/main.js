import Vue from 'vue'
import App from './App.vue'
import router from './route/router'
import store from './store'
import './styles/reset.css'
import './js/rem'
import ElementUI from 'element-ui'
import '../theme/index.css'
import 'element-ui/lib/theme-chalk/display.css'; 
import axios from 'axios'
import i18n from './lang/index'

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
    axios.defaults.baseURL = "https://api.apiopen.top/getSongPoetry";
}

axios.defaults.withCredentials=true
new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
