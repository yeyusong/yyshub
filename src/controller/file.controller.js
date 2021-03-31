/*
 * @Author: yeyusong
 * @Date: 2021-03-31 14:47:03
 * @LastEditors: yeyusong
 * @LastEditTime: 2021-03-31 15:15:38
 * @Description:
 */
const fileService = require('../service/file.service')

class FileController {
  async saveAvatarInfo(ctx, next) {
    const { filename, mimetype, size } = ctx.req.file
    const { id } = ctx.user
    const res = await fileService.createAvatar(filename, mimetype, size, id)
    ctx.body = res
  }
}

module.exports = new FileController()
