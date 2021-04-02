/*
 * @Author: yeyusong
 * @Date: 2021-03-12 11:39:19
 * @LastEditors: yeyusong
 * @LastEditTime: 2021-04-02 14:55:42
 * @Description:
 */
const Router = require('koa-router')
const { create, avatarInfo } = require('../controller/user.controller')
const { verifyUser, handlePassword } = require('../middleware/user.middleware')
const userRouter = new Router({ prefix: '/users' })

userRouter.post('/', verifyUser, handlePassword, create)
userRouter.get('/:userId/avatar', avatarInfo)

module.exports = userRouter
