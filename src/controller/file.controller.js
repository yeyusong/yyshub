/*
 * @Author: yeyusong
 * @Date: 2021-03-31 14:47:03
 * @LastEditors: yeyusong
 * @LastEditTime: 2021-04-06 10:58:44
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

  async savePictureInfo(ctx, next) {
    const files = ctx.req.files
    const { id } = ctx.user
    const { momentId } = ctx.query
    for (let file of files) {
      const { filename, mimetype, size } = file
      await fileService.createFile(filename, mimetype, size, id, momentId)
    }
    ctx.body = '动态配图上传完成'
  }
}

module.exports = new FileController()
