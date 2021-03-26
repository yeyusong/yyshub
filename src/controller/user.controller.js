/*
 * @Author: yeyusong
 * @Date: 2021-03-12 11:44:33
 * @LastEditors: yeyusong
 * @LastEditTime: 2021-03-15 11:46:37
 * @Description:
 */
const service = require('../service/user.service')
class UserController {
  async create(ctx, next) {
    // 获取用户传递的参数
    const user = ctx.request.body
    // 查询数据
    const result = await service.create(user)
    // 返回数据
    ctx.body = result
  }
}
module.exports = new UserController()
