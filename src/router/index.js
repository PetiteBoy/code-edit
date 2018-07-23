import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Reg from '@/components/Reg'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: Login
  }, {
    path: '/login',
    component: Login
  }, {
    path: '/reg',
    component: Reg
  }, {
    path: '/home',
    component: Home
  }]
})
