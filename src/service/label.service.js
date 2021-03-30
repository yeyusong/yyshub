/*
 * @Author: yeyusong
 * @Date: 2021-03-30 14:27:38
 * @LastEditors: yeyusong
 * @LastEditTime: 2021-03-30 16:20:43
 * @Description:
 */
const connection = require('../app/database')
class LabelService {
  async create(name) {
    const statement = `INSERT INTO label (name) VALUES (?);`
    const [res] = await connection.execute(statement, [name])
    return res
  }

  async getLabelByName(name) {
    const statement = `SELECT * FROM label WHERE name = ?;`
    const [res] = await connection.execute(statement, [name])
    return res[0]
  }
}

module.exports = new LabelService()
