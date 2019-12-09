import * as Router from 'koa-router';
import User from '../../../contraoller/user'
// import checkToken from '../../../utils/Token/checkToken'

const userApi = new Router()

userApi.post('/register' ,User.register)
userApi.post('/login',User.login)

export default userApi