import router from './router'
import { getToken } from '@/utils/auth/index'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const whitePageList = ['/admin/register', '/admin/login', '/admin/resetpswd']
router.beforeEach((to, from, next) => {
  Nprogress.start()
  document.title = to.meta.title
  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/admin/login') {
      next({ path: '/' })
    } else {
      next()
    }
    Nprogress.done()
  } else {
    if (whitePageList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/admin/login`)
      Nprogress.done()
    }
  }
})

router.afterEach(() => {
  Nprogress.done()
})
