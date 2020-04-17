import { UserService } from '../../../service/index'
import createToken from '../../../utils/Token/createToken'

export const LoginContainer = async (ctx: any) => {
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