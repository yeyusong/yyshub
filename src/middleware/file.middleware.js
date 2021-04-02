/*
 * @Author: yeyusong
 * @Date: 2021-03-31 14:33:13
 * @LastEditors: yeyusong
 * @LastEditTime: 2021-04-02 15:14:46
 * @Description:
 */
const Multer = require('koa-multer')
const { AVATAR_PATH } = require('../constants/file-path')

const avatarUpload = Multer({
  dest: AVATAR_PATH,
})

const avatarHandler = avatarUpload.single('avatar')

module.exports = { avatarHandler }
