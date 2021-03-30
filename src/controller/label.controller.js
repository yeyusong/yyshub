/*
 * @Author: yeyusong
 * @Date: 2021-03-30 14:19:59
 * @LastEditors: yeyusong
 * @LastEditTime: 2021-03-30 14:21:24
 * @Description:
 */
class LabelController {
  async create(ctx, next) {
    ctx.body = '哈哈'
  }
}

module.exports = new LabelController()
