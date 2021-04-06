/*
 * @Author: yeyusong
 * @Date: 2021-03-22 14:31:35
 * @LastEditors: yeyusong
 * @LastEditTime: 2021-04-06 11:30:30
 * @Description:
 */
const Router = require('koa-router')

const momentRouter = new Router({ prefix: '/moment' })

const {
  create,
  detail,
  list,
  update,
  remove,
  addLabels,
  fileInfo,
} = require('../controller/moment.controller')
const {
  verifyAuth,
  verifyPermission,
} = require('../middleware/auth.middleware')
const { verifyLabelExists } = require('../middleware/label.middleware')

momentRouter.post('/', verifyAuth, create)
momentRouter.get('/', list)
momentRouter.get('/:momentId', detail)
// 1.用户必须登录 2.用户具备权限
momentRouter.patch('/:momentId', verifyAuth, verifyPermission, update)
momentRouter.delete('/:momentId', verifyAuth, verifyPermission, remove)
// 给动态添加标签
momentRouter.post(
  '/:momentId/labels',
  verifyAuth,
  verifyPermission,
  verifyLabelExists,
  addLabels
)
momentRouter.get('/images/:filename', fileInfo)

module.exports = momentRouter
