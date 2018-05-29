import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import addSubject from '@/components/addSubject'
import Dashboard from '@/components/Dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/addSubject',
      name: 'addSubject',
      component: addSubject
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
})
