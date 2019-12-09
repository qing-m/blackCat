import * as Router from 'koa-router';
import { LoginContainer,RegisterContainer,AddFriendContainer,getFriendsList } from '../../../contraoller/user'
// import checkToken from '../../../utils/Token/checkToken'

const userApi = new Router()

userApi.post('/register' ,RegisterContainer)
userApi.post('/login',LoginContainer)
userApi.post('/addFriends',AddFriendContainer)
userApi.post('/getFriendsList',getFriendsList)

export default userApi