/*
 * @Author: yeyusong
 * @Date: 2021-03-31 14:06:11
 * @LastEditors: yeyusong
 * @LastEditTime: 2021-04-06 13:13:22
 * @Description:
 */
const Router = require('koa-router')

const { verifyAuth } = require('../middleware/auth.middleware')
const {
  avatarHandler,
  pictureHandler,
  pictureResize,
} = require('../middleware/file.middleware')
const {
  saveAvatarInfo,
  savePictureInfo,
} = require('../controller/file.controller')

const fileRouter = new Router({ prefix: '/upload' })

fileRouter.post('/avatar', verifyAuth, avatarHandler, saveAvatarInfo)
fileRouter.post(
  '/picture',
  verifyAuth,
  pictureHandler,
  pictureResize,
  savePictureInfo
)

module.exports = fileRouter
