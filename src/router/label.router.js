/*
 * @Author: yeyusong
 * @Date: 2021-03-30 14:16:16
 * @LastEditors: yeyusong
 * @LastEditTime: 2021-03-31 09:26:02
 * @Description:
 */
const Router = require('koa-router')

const { verifyAuth } = require('../middleware/auth.middleware')
const { create, list } = require('../controller/label.controller.js')

const labelRouter = new Router({ prefix: '/label' })

labelRouter.post('/', verifyAuth, create)
labelRouter.get('/', list)

module.exports = labelRouter
