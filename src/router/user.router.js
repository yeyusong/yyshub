/*
 * @Author: yeyusong
 * @Date: 2021-03-12 11:39:19
 * @LastEditors: yeyusong
 * @LastEditTime: 2021-03-15 11:49:31
 * @Description:
 */
const Router = require('koa-router')
const { create } = require('../controller/user.controller')
const { verifyUser, handlePassword } = require('../middleware/user.middleware')
const userRouter = new Router({ prefix: '/users' })

userRouter.post('/', verifyUser, handlePassword, create)

module.exports = userRouter
