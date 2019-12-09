import { UserService } from '../../service/index'
import createToken from '../../utils/Token/createToken'

class User {
	static async register (ctx: any) {
		const { tel, password } = ctx.request.body;
		let result = await UserService.findDataTel(tel)

		if(!result.length) {
			ctx.body = {
				code: 1,
				success: true,
				message: '注册成功'
			}
			await UserService.insertData(tel, password)
		} else {
			ctx.body = {
				code: -1,
				success: false,
				message: '用户名已存在'
			}
		}
	}

	static async login (ctx: any) {
		const { tel, password} = ctx.request.body;
		let response = await UserService.findDataTel(tel) 
		const {
			user_id, user_password, user_telephone_number
		} = response[0];
		if(response.length) {
			if(password === user_password) {
				const token = createToken(user_id)
				ctx.body = {
					code: 1,
					success: true,
					message: '登录成功',
					token: token,
					userInfo: {
						user_id,
						user_password,
						user_tel: user_telephone_number
					}
				}
			}
		} else {
			ctx.body = {
				code: -1,
				success: false,
				message: '登录失败'
			}
		}
	}
 }

export default User