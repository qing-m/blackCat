import router from './router/index'
import { getCustInfo } from './common/js/utils'
import store from './store'

const whiteList = ['/login']

router.beforeEach((to, from, next) => {
	if (getCustInfo()) {
		if (to.path === '/login') {
			next({ path: '/' })
		} else {
			if (store.getters.roles.length === 0) {
        store.dispatch('GetInfo').then(res => { // 拉取用户信息
          console.log(res)
          next()
        }).catch((err) => {
          store.dispatch('FedLogOut').then(() => {
						console.log(err)
            next({ path: '/' })
          })
        })
      } else {
        next()
      }
		}
	} else {
		if (whiteList.indexOf(to.path) !== -1) {
			next()
		} else {
			next(`/login?redirect=${to.path}`)
		}
	}
})