// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRoute from 'vue-router'
import Home from '@/components/home/Home'
import Login from '@/components/login/Login'
Vue.use(VueRoute)
const router = new VueRoute({
  routes: [{ path: '/login', component: Login }, { path: '/home', component: Home }
  ]
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
