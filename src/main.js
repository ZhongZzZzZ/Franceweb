import Vue from 'vue'
import App from './App.vue'
import router from './route/router'
import store from './store'
import './styles/reset.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css';
import axios from 'axios'

Vue.use(ElementUI)
Vue.config.productionTip = false

axios.defaults.withCredentials=true
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
