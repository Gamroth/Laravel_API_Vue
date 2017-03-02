import Vue from 'vue'
import VueResource from 'vue-resource'

import App from './App.vue'

import Router from './routes.js'
import Auth from './packages/auth/Auth.js'

Vue.use(VueResource)
Vue.use(Auth)

new Vue({
  el: '#app',
  render: h => h(App),
  router: Router
})
