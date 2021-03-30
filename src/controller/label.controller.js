/*
 * @Author: yeyusong
 * @Date: 2021-03-30 14:19:59
 * @LastEditors: yeyusong
 * @LastEditTime: 2021-03-30 14:35:17
 * @Description:
 */
const service = require('../service/label.service')
class LabelController {
  async create(ctx, next) {
    const { name } = ctx.request.body
    const res = await service.create(name)
    ctx.body = res
  }
}

module.exports = new LabelController()
