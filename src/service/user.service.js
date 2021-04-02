/*
 * @Author: yeyusong
 * @Date: 2021-03-12 11:51:09
 * @LastEditors: yeyusong
 * @LastEditTime: 2021-04-02 16:02:12
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

  async updateAvatarUrlById(avatarUrl, userId) {
    const statement = `UPDATE users SET avatar_url = ? WHERE id = ?;`
    const [res] = await connection.execute(statement, [avatarUrl, userId])
    return res
  }
}
module.exports = new UserService()
