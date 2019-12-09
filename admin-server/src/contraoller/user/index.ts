import { UserService } from '../../service/index'

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
		} else {
			ctx.body = {
				code: -1,
				success: false,
				message: '用户名已存在'
			}
			//await UserService.insertData(tel, password)
		}
	}

	static async login (ctx: any) {
		const { tel, password} = ctx.request.body;

		let result = await UserService.findDataTel(tel) 
		if(result.length) {
			ctx.body = {
				code: 1,
				success: true,
				message: '登录成功'
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