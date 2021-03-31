/*
 * @Author: yeyusong
 * @Date: 2021-03-31 14:06:11
 * @LastEditors: yeyusong
 * @LastEditTime: 2021-03-31 14:48:48
 * @Description:
 */
const Router = require('koa-router')

const { verifyAuth } = require('../middleware/auth.middleware')
const { avatarHandler } = require('../middleware/file.middleware')
const { saveAvatarInfo } = require('../controller/file.controller')

const fileRouter = new Router({ prefix: '/upload' })

fileRouter.post('/avatar', verifyAuth, avatarHandler, saveAvatarInfo)

module.exports = fileRouter
