import Layout from '@/Layout/index'

const constRouter = [
	{
		path: '/',
		component: Layout,
		redirect: '/dashboard',
		children: [
			{
				path: 'dashboard',
				component: () => import('@/views/dashboard/index'),
				name: 'dashboard',
        meta: { title: 'dashboard', icon: 'dashboard', affix: true }
			}
		]
	},
	{
    path: '/documentation',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/documentation/index'),
        name: 'documentation',
        meta: { title: 'documentation', icon: 'documentation', affix: true }
      }
    ]
  }
]

export default constRouter