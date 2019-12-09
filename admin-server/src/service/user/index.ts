export class UserService {
	static findDataName (name: string) {
		return true
	}

  static insertData(name: string, password: string) {
    const _sql = 'insert into user_info(name,password) values(?,?);';
		return true
  };
}