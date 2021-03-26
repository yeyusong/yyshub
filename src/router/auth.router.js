/*
 * @Author: yeyusong
 * @Date: 2021-03-15 13:32:03
 * @LastEditors: yeyusong
 * @LastEditTime: 2021-03-22 13:37:30
 * @Description:
 */
const Router = require('koa-router')

const authRouter = new Router()

const { login, success } = require('../controller/auth.controller')
const { verifyLogin, verifyAuth } = require('../middleware/auth.middleware')

authRouter.post('/login', verifyLogin, login)
authRouter.get('/test', verifyAuth, success)

module.exports = authRouter
