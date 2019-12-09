import { query } from '../../sql/query'

export class ArticleService {
	name = 1
	static findDataTel (tel: string) {
		const _sql = 'SELECT * FROM why_users WHERE user_telephone_number=?'
		return query(_sql, tel)
	}

  static insertData(tel: string, password: string) {
		const _sql = 'INSERT INTO why_users(user_telephone_number, user_password) values(?,?)'
		return query(_sql,[tel,password])
  };
}