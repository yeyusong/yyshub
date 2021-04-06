/*
 * @Author: yeyusong
 * @Date: 2021-03-31 14:33:13
 * @LastEditors: yeyusong
 * @LastEditTime: 2021-04-06 15:23:16
 * @Description:
 */
const path = require('path')
const Multer = require('koa-multer')
const jimp = require('jimp')
const { AVATAR_PATH, PICTURE_PATH } = require('../constants/file-path')

const avatarUpload = Multer({
  dest: AVATAR_PATH,
})

const avatarHandler = avatarUpload.single('avatar')

const pictureUpload = Multer({
  dest: PICTURE_PATH,
})

const pictureHandler = pictureUpload.array('picture', 9)

const pictureResize = async (ctx, next) => {
  const files = ctx.req.files
  for (let file of files) {
    const destPath = path.join(file.destination, file.filename)
    console.log(destPath)
    jimp.read(file.path).then((image) => {
      image.resize(1280, jimp.AUTO).write(`${destPath}-large`)
      image.resize(640, jimp.AUTO).write(`${destPath}-middle`)
      image.resize(320, jimp.AUTO).write(`${destPath}-small`)
    })
  }

  await next()
}

module.exports = { avatarHandler, pictureHandler, pictureResize }
