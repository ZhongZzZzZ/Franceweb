import Vue from 'vue'
import App from './App.vue'
import router from './route/router'
import store from './store'
import './styles/reset.css'
import ElementUI from 'element-ui'
import '../theme/index.css'
/* import 'element-ui/lib/theme-chalk/index.css' */
/* import './styles/element-variables.scss' */
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
    axios.defaults.baseURL = "https://api.apiopen.top/getSongPoetry";
}

axios.defaults.withCredentials=true
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
