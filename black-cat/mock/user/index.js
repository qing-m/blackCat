export default [
  {
    url: 'auth/login',
    type: 'get',
    response: config => {
      return {
        'errno': 0,
        'data': {
          'token': 'BLACK_CAT_TOKEN'
        },
        'errmsg': '成功'
      }
    }
  }
]
