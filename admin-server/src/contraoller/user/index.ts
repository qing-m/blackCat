import UserService from '../../service/user'

class User {
	static async register (ctx: any) {
		const { name, password } = ctx.request.body;

		let result = await UserService.findDataName(name)
		if(result) {
			ctx.body = {
				success: false,
				message: '用户名已存在'
			}
		} else {
			ctx.body = {
				success: true,
				message: '注册成功'
			}
			await UserService.insertData(name, password)
		}
	}

	static async login (ctx: any) {
		const { name, password} = ctx.request.body;

		let result = await UserService.findDataName(name) 
		if(result) {
			ctx.body = {
				success: true,
				message: '登录成功'
			}
		} else {
			ctx.body = {
				success: false,
				message: '登录失败'
			}
		}
	}
 }

export default User