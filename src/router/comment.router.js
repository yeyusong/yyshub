/*
 * @Author: yeyusong
 * @Date: 2021-03-26 11:20:30
 * @LastEditors: yeyusong
 * @LastEditTime: 2021-03-30 11:37:10
 * @Description:
 */
const Router = require('koa-router')
const {
  verifyAuth,
  verifyPermission,
} = require('../middleware/auth.middleware')
const {
  create,
  reply,
  update,
  remove,
  list,
} = require('../controller/comment.controller.js')

const commentRouter = new Router({ prefix: '/comment' })

commentRouter.post('/', verifyAuth, create)
commentRouter.post('/:commentId/reply', verifyAuth, reply)
commentRouter.patch('/:commentId', verifyAuth, verifyPermission, update)
commentRouter.delete('/:commentId', verifyAuth, verifyPermission, remove)
commentRouter.get('/', list)

module.exports = commentRouter
