import { query } from '../../sql/query'

export class UserService {
	static findDataTel (tel: string) {
		const _sql = 'SELECT * FROM why_users WHERE user_telephone_number=?'
		return query(_sql, tel)
	}

  static insertData(tel: string, password: string) {
		const _sql = 'INSERT INTO why_users(user_telephone_number, user_password) values(?,?)'
		return query(_sql,[tel,password])
	};
	
	static addFriendsEachOther(user_id:number, from_user:number) {
		const _sql = 'INSERT INTO why_user_friends(user_id,user_friends_id,user_note,user_status) VALUES (?,?,?,?), (?,?,?,?)';
		return query(_sql,[user_id,from_user,'1','B',from_user,user_id,'1','B'])
	}

	static getFriendsList(user_id: number) {
		const _sql = 'SELECT * FROM why_user_friends WHERE user_id=?'
		return query(_sql,[user_id])
	}
}