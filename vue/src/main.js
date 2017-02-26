import Vue from 'vue'
import VueResource from 'vue-resource'

import App from './App.vue'

import Router from './routes.js'

Vue.use(VueResource)

new Vue({
  el: '#app',
  render: h => h(App),
  router: Router
})
