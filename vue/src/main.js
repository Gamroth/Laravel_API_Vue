import Vue from 'vue'
import VueResource from 'vue-resource'

import App from './App.vue'

import Router from './routes.js'
import Auth from './packages/auth/Auth.js'

Vue.use(VueResource)
Vue.use(Auth)

Vue.http.options.root = 'http://localhost:8000'

Vue.http.interceptors.push((request, next) => {
  request.headers.set('Authorization', 'Bearer ' + Vue.auth.getToken())
  next()
})

//token zwraca null zaraz po zalogowaniu 
// Vue.http.headers.common['Authorization'] = 'Bearer ' + Vue.auth.getToken()



Router.beforeEach(
  (to, from, next) => {
    if( to.matched.some(record => record.meta.forVisitors) ) {
      if( Vue.auth.isAuthenticated() ) {
        next({
          path: '/feed'
        })
      } else {
        next()
      }
    } 

    else if (to.matched.some(record => record.meta.forAuth)) {
      if (!Vue.auth.isAuthenticated()) {
        next({
          path: '/login'
        })
      } else {
        next()
      }
    } 
    
    
    
    else {
      next()
    }
  }
)

new Vue({
  el: '#app',
  render: h => h(App),
  router: Router
})
