/*
 * @Author: yeyusong
 * @Date: 2021-03-30 14:19:59
 * @LastEditors: yeyusong
 * @LastEditTime: 2021-03-31 09:29:55
 * @Description:
 */
const service = require('../service/label.service')
class LabelController {
  async create(ctx, next) {
    const { name } = ctx.request.body
    const res = await service.create(name)
    ctx.body = res
  }

  async list(ctx, next) {
    const { limit, offset } = ctx.query
    const res = await service.getLabels(limit, offset)
    ctx.body = res
  }
}

module.exports = new LabelController()
