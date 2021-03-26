/*
 * @Author: yeyusong
 * @Date: 2021-03-26 11:20:30
 * @LastEditors: yeyusong
 * @LastEditTime: 2021-03-26 15:48:45
 * @Description:
 */
const Router = require('koa-router')
const { verifyAuth } = require('../middleware/auth.middleware')
const { create, reply } = require('../controller/comment.controller.js')

const commentRouter = new Router({ prefix: '/comment' })

commentRouter.post('/', verifyAuth, create)
commentRouter.post('/reply', verifyAuth, reply)

module.exports = commentRouter
