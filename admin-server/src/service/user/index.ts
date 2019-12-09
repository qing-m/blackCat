import { query } from '../../sql/query'

export class UserService {
	static findDataTel (tel: string) {
		const _sql = 'SELECT * FROM why_users WHERE user_telephone_number=?'
		return query(_sql, tel)
	}

  static insertData(name: string, password: string) {
    const _sql = 'insert into user_info(name,password) values(?,?);';
		return true
  };
}