import { postInstance, getInstance } from './axios'

const login = postInstance('/login')
const register = postInstance('/register')
const addFriend = postInstance('/addFriends')
const getFriendsList = postInstance('/getFriendsList')
const getArticle = getInstance('/whySever/blog/index/Pub/getArticle')

export {
	login,
	register,
	addFriend,
	getFriendsList,
	getArticle
}