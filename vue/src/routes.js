import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from './components/authentication/Login.vue'
import Register from './components/authentication/Register.vue'
import Feed from './components/Feed.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [

    {
      path: "/login",
      component: Login,
      meta: {
        forVisitors: true
      }
    },

    {
      path: "/register",
      component: Register,
      meta: {
        forVisitors: true
      }
    },

    {
      path: '/feed',
      component: Feed,
      meta: {
        forAuth: true
      }
    },

    {
      path: '/products/create',
      component: require('./components/product/Create.vue'),
      meta: {
        forAuth: true
      }
    },

    {
      path: '/products/:product_id/edit',
      component: require('./components/product/Edit.vue'),
      meta: {
        forAuth: true
      }
    }


  ],
  linkActiveClass: 'active'
})

export default router