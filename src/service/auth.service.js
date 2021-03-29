/*
 * @Author: yeyusong
 * @Date: 2021-03-24 16:46:11
 * @LastEditors: yeyusong
 * @LastEditTime: 2021-03-29 13:59:25
 * @Description:
 */
const connection = require('../app/database')

class AuthService {
  async checkResource(tableName, id, userId) {
    const statement = `SELECT * FROM ${tableName} WHERE id = ? AND user_id = ?;`
    const [res] = await connection.execute(statement, [id, userId])
    return res.length === 0 ? false : true
  }
}
module.exports = new AuthService()
