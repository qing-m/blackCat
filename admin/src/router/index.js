import Vue from 'vue'
import VueRouter from 'vue-router'
import constRouter from './constRouter'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    ...constRouter,
    {
      path: '/api',
      name: 'api',
      component: () => import('@/views/apiTest/apiTest')
    }
  ]
})

export default router
