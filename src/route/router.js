import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home.vue'
import About from '../pages/About/About.vue'
import Service from '../pages/Service/Service.vue'
import Activity from '../pages/Activity/Activity.vue'
import Topic from '../pages/Topic/Topic.vue'
import Report from '../pages/Report/Report.vue'
import Contact from '../pages/Contact/Contact.vue'
import Link from '../pages/Link/Link.vue'
import Login from '../pages/Login/Login.vue'
import Register from '../pages/Register/Register.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children:[
        {
          path: 'login',
          name: 'login',
          component: Login,
        },
        {
          path: 'register',
          name: 'register',
          component: Register
        },
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/service',
      name: 'service',
      component: Service
    },
    {
      path: '/activity',
      name: 'activity',
      component: Activity
    },
    {
      path: '/topic',
      name: 'topic',
      component: Topic
    },
    {
      path: '/report',
      name: 'report',
      component: Report
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/link',
      name: 'link',
      component: Link
    },
  ]
})
