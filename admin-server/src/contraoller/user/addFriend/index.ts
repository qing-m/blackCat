import { UserService } from '../../../service/index'

export const AddFriendContainer = async (ctx:any) => {
	const { user_id, from_user } = ctx.request.body;
	let response = await UserService.addFriendsEachOther(user_id,from_user)
	if(response) {
		ctx.body = 'success'
	}
}

export const getFriendsList = async (ctx: any) => {
	const { user_id } = ctx.request.body;
	let response = await UserService.getFriendsList(user_id)
	console.log(response)
}