/*
 * @Author: yeyusong
 * @Date: 2021-03-31 14:33:13
 * @LastEditors: yeyusong
 * @LastEditTime: 2021-04-06 10:09:39
 * @Description:
 */
const Multer = require('koa-multer')
const { AVATAR_PATH, PICTURE_PATH } = require('../constants/file-path')

const avatarUpload = Multer({
  dest: AVATAR_PATH,
})

const avatarHandler = avatarUpload.single('avatar')

const pictureUpload = Multer({
  dest: PICTURE_PATH,
})

const pictureHandler = pictureUpload.array('picture', 9)

module.exports = { avatarHandler, pictureHandler }
