/*
 * @Author: yeyusong
 * @Date: 2021-03-12 11:44:33
 * @LastEditors: yeyusong
 * @LastEditTime: 2021-04-02 15:25:07
 * @Description:
 */
const fs = require('fs')
const userService = require('../service/user.service')
const fileService = require('../service/file.service')
const { AVATAR_PATH } = require('../constants/path-types')
class UserController {
  async create(ctx, next) {
    // 获取用户传递的参数
    const user = ctx.request.body
    // 查询数据
    const result = await userService.create(user)
    // 返回数据
    ctx.body = result
  }

  async avatarInfo(ctx, next) {
    const { userId } = ctx.params
    const avatarInfo = await fileService.getAvatarByUserId(userId)
    ctx.response.set('content-type', avatarInfo.mimetype)
    ctx.body = fs.createReadStream(`${AVATAR_PATH}/${avatarInfo.filename}`)
  }
}
module.exports = new UserController()
