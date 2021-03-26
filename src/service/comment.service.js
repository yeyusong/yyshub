/*
 * @Author: yeyusong
 * @Date: 2021-03-26 14:10:24
 * @LastEditors: yeyusong
 * @LastEditTime: 2021-03-26 15:57:01
 * @Description:
 */
const connection = require('../app/database')

class CommentService {
  async create(momentId, content, userId) {
    const statement = `INSERT INTO comment (content,moment_id,user_id) VALUES (?,?,?);`
    const [res] = await connection.execute(statement, [
      content,
      momentId,
      userId,
    ])
    return res
  }

  async reply(momentId, content, userId, commentId) {
    const statement = `INSERT INTO comment (content,moment_id,user_id,comment_id) VALUES (?,?,?,?);`
    const [res] = await connection.execute(statement, [
      content,
      momentId,
      userId,
      commentId,
    ])
    return res
  }
}

module.exports = new CommentService()
