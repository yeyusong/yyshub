/*
 * @Author: yeyusong
 * @Date: 2021-03-12 11:51:09
 * @LastEditors: yeyusong
 * @LastEditTime: 2021-03-15 10:59:57
 * @Description:
 */
const connection = require('../app/database')

class UserService {
  async create(user) {
    const { name, password } = user
    const statement = `INSERT INTO users (name,password) VALUES (?,?);`

    const res = await connection.execute(statement, [name, password])

    // 将user存储到数据库中
    return res[0]
  }
  async getUserByName(name) {
    const statement = `SELECT * FROM users WHERE name = ?;`
    const res = await connection.execute(statement, [name])
    return res[0]
  }
}
module.exports = new UserService()
