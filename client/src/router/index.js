import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Form from '../components/Form.vue'
import Detail from '../components/Detail.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/add',
      component: Form
    },
    {
      path: '/group/:id',
      component: Detail
    },
    {
      path: '/login',
      component: Login
    }
  ]
})

router.beforeEach((to, from) => {
  console.log(to, from)
  if (!localStorage.access_token && to.path !== "/login") {
    return '/login'
  }

  if (localStorage.access_token && to.path == "/login") {
    return '/'
  }
})

export default router

