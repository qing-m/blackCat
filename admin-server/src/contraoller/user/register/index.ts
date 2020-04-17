import { UserService } from '../../../service/index'

export const RegisterContainer = async (ctx:any) => {
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