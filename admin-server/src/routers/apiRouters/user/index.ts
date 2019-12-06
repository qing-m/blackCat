import * as Router from 'koa-router';
import User from '../../../contraoller/user'

const userApi = new Router()

userApi.post('/register',User.register)
userApi.post('/login', User.login)

export default userApi