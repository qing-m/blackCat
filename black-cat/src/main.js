import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import '@/common/stylus/reset.styl'
import '@/common/icon/icon.styl'
import '@/permission'

Vue.config.productionTip = false

const { mockXHR } = require('../mock/index.js')
mockXHR()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
