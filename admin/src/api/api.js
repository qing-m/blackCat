import { postInstance, getInstance } from './axios'

const login = postInstance('/login')
const register = postInstance('/register')
const getArticle = getInstance('/whySever/blog/index/Pub/getArticle')
const getUserList = postInstance('/user')
const saveArticle = postInstance('/saveArticle')

export {
	login,
	register,
	getArticle,
	getUserList,
	saveArticle
}