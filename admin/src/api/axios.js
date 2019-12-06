import axios from 'axios'
import qs from 'qs'
import { getCustInfo } from 'common/js/utils'
const prefixUrl = process.env.VUE_APP_HOSTURL
// 实例化axios
const instance = axios.create()

instance.interceptors.request.use(config => {
  config.method === 'post' ? qs.stringify({ ...Object.assign({}, config.data) }) : config.params = { ...Object.assign({}, config.params) }
  const token = getCustInfo.token
  if (token) {
    config.headers['token'] = token
  }
  return config
  }, (error) => {
    Promise.reject(error)
  }
)

instance.interceptors.response.use(response => {
    const reqData = response.data
    return reqData
  }, (error) => {
    Promise.reject(error)
  }
)

// get instance方法
export function getInstance(url) {
  return function getReturn(params = {}) {
    return instance.get(prefixUrl + url, { params: params })
  }
}

// post instance方法
export function postInstance(url) {
  return function postReturn(params = {}) {
    return instance.post(prefixUrl + url, params)
  }
}
