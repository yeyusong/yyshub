/*
 * @Author: yeyusong
 * @Date: 2021-03-26 14:10:24
 * @LastEditors: yeyusong
 * @LastEditTime: 2021-03-30 13:59:12
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

  async update(commentId, content) {
    const statement = `UPDATE comment SET content = ? WHERE id = ?`
    const [res] = await connection.execute(statement, [content, commentId])
    return res
  }

  async remove(commentId) {
    const statement = `DELETE FROM comment WHERE id = ?`
    const [res] = await connection.execute(statement, [commentId])
    return res
  }

  async getCommentsByMomentId(momentId) {
    const statement = `
    SELECT 
      m.id,m.content,m.comment_id commentId,m.createAt createTime,
      JSON_OBJECT('id',u.id,'name',u.name) user
    FROM comment m
    LEFT JOIN users u ON u.id = m.user_id
    WHERE moment_id = ?;
    `
    const [res] = await connection.execute(statement, [momentId])
    return res
  }
}

module.exports = new CommentService()
