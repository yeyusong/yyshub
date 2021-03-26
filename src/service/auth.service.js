/*
 * @Author: yeyusong
 * @Date: 2021-03-24 16:46:11
 * @LastEditors: yeyusong
 * @LastEditTime: 2021-03-25 10:48:26
 * @Description:
 */
const connection = require('../app/database')

class AuthService {
  async checkMoment(momentId, userId) {
    const statement = `SELECT * FROM moment WHERE id = ? AND user_id = ?;`
    const [res] = await connection.execute(statement, [momentId, userId])
    return res.length === 0 ? false : true
  }
}
module.exports = new AuthService()
