/*
 * @Author: yeyusong
 * @Date: 2021-03-22 14:38:30
 * @LastEditors: yeyusong
 * @LastEditTime: 2021-03-26 09:13:22
 * @Description:
 */
const momentService = require('../service/moment.service')

class MomentController {
  async create(ctx, next) {
    // 获取数据(user_id,content)
    const userId = ctx.user.id
    const content = ctx.request.body.content
    // 将数据插入数据库
    const result = await momentService.create(userId, content)
    ctx.body = result
  }

  async detail(ctx, next) {
    // 获取momentId
    const momentId = ctx.params.momentId
    // 根据id去找数据
    const res = await momentService.getMomentById(momentId)
    ctx.body = res
  }

  async list(ctx, next) {
    const { offset, size } = ctx.query
    const res = await momentService.getMomentList(offset, size)
    ctx.body = res
  }

  async update(ctx, next) {
    const { momentId } = ctx.params
    const { content } = ctx.request.body
    const { id } = ctx.user
    const res = await momentService.update(content, momentId)
    ctx.body = res
  }

  async remove(ctx, next) {
    const { momentId } = ctx.params
    const res = await momentService.remove(momentId)
    ctx.body = res
  }
}
module.exports = new MomentController()
