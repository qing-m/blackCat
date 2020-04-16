import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import user from './user/index.js'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/views/home/index'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/echarts',
    component: () => import('@/views/echarts/index'),
    meta: {
      title: '图表'
    }
  },
  ...user
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
