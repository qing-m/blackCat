import axios from 'axios'

const blackCatRequest = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

blackCatRequest.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

blackCatRequest.interceptors.response.use(
  response => {
    const data = response.data
    return data
  },
  error => {
    return Promise.reject(error)
  }
)

export {
  blackCatRequest
}
