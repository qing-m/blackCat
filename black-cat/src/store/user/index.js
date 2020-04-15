import { login } from '@/api/user/index'
import { setToken } from '@/utils/auth/index'

const user = {
  state: {
    token: 'TOKEN'
  },
  getters: {
    token: state => state.token
  },
  mutations: {
    SET_TOKEN: (state, value) => {
      state.token = value
    }
  },
  actions: {
    USER_LGOIN({ commit }, userInfo) {
      const { username, password } = userInfo
      return new Promise((reslove, reject) => {
        login({
          username: username,
          password: password
        }).then(res => {
          const { data } = res
          commit('SET_TOKEN', data.token)
          setToken(data.token)
          reslove(data)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user
