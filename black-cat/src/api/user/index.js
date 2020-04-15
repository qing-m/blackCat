import { blackCatRequest } from '@/request/index.js'

export function login(data) {
  return blackCatRequest({
    url: 'auth/login',
    methods: 'post',
    data
  })
}
