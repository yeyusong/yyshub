/*
 * @Author: yeyusong
 * @Date: 2021-03-26 13:30:27
 * @LastEditors: yeyusong
 * @LastEditTime: 2021-03-26 15:55:20
 * @Description:
 */
const service = require('../service/comment.service.js')

class CommentController {
  async create(ctx, next) {
    const { momentId, content } = ctx.request.body
    const { id } = ctx.user
    const res = await service.create(momentId, content, id)
    ctx.body = res
  }

  async reply(ctx, next) {
    const { momentId, content, commentId } = ctx.request.body
    const { id } = ctx.user
    const res = await service.reply(momentId, content, id, commentId)
    ctx.body = res
  }
}
module.exports = new CommentController()
