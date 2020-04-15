export default [
  {
    path: '/admin/login',
    name: 'login',
    component: () => import('@/views/admin/index.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/admin/register',
    name: 'register',
    component: () => import('@/views/admin/index.vue'),
    meta: {
      title: '注册'
    }
  },
  {
    path: '/admin/resetpswd',
    name: 'resetpswd',
    component: () => import('@/views/admin/index.vue'),
    meta: {
      title: '修改密码'
    }
  }
]
