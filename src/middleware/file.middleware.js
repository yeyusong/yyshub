/*
 * @Author: yeyusong
 * @Date: 2021-03-31 14:33:13
 * @LastEditors: yeyusong
 * @LastEditTime: 2021-03-31 14:33:40
 * @Description:
 */
const Multer = require('koa-multer')

const avatarUpload = Multer({
  dest: './uploads/avatar',
})

const avatarHandler = avatarUpload.single('avatar')

module.exports = { avatarHandler }
