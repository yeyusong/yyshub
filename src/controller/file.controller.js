/*
 * @Author: yeyusong
 * @Date: 2021-03-31 14:47:03
 * @LastEditors: yeyusong
 * @LastEditTime: 2021-04-02 16:13:18
 * @Description:
 */
const fileService = require('../service/file.service')
const userService = require('../service/user.service')
const { AVATAR_PATH } = require('../constants/file-path')
const { APP_HOST, APP_PORT } = require('../app/config')

class FileController {
  async saveAvatarInfo(ctx, next) {
    const { filename, mimetype, size } = ctx.req.file
    const { id } = ctx.user
    const res = await fileService.createAvatar(filename, mimetype, size, id)

    const avatarUrl = `${APP_HOST}:${APP_PORT}/users/${id}/avatar`
    await userService.updateAvatarUrlById(avatarUrl, id)

    ctx.body = '头像上传成功'
  }
}

module.exports = new FileController()
