import * as mysql from 'mysql'
import * as fs from 'fs'
import * as path from 'path'

interface dbType {
    host: string,
    port: number,
    user: string,
    password: string,
    multipleStatements: boolean
}
interface dbNameType {
    database: string
}
const db:dbType = {
    host: 'localhost',//'39.105.159.28', //192.168.91.15
    port: 3306,
    user: 'root', // root // da
    password: '123456', //123456 // DA@ZealFi
    multipleStatements: true
}
const dbName: dbNameType = {
    database: 'why_blog'
}

const sqlContent:string = fs.readFileSync(path.resolve(__dirname,'./sql/why_blog.sql'),'utf-8')
let pool: any

const init:any = mysql.createConnection(db)

//连接数据库
init.connect()
init.query('CREATE DATABASE why_blog', (err:object)=>{
  Object.assign(db,dbName)
  pool = mysql.createPool(db)
  if(err){
    console.log('why_blog database created already')
  } else {
    console.log('create why_blog database')
    query(sqlContent).then( (res:any) =>{
        console.log('import sql is success')
    }).catch( (err:any) =>{
        console.log('import sql is error')
    })
  }
})
init.end()

export const query = (sql:any, values?:any): Promise<any> => new Promise((resolve, reject) => {
  pool.getConnection((err:any, connection:any) => {
    if (err) {
      console.log('query connec error!', err);
      // resolve(err);
    } else {
      connection.query(sql, values, (err:any, rows:any) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
        connection.release();
      });
    }
  });
});