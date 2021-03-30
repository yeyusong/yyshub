/*
 * @Author: yeyusong
 * @Date: 2021-03-30 14:16:16
 * @LastEditors: yeyusong
 * @LastEditTime: 2021-03-30 14:23:59
 * @Description:
 */
const Router = require('koa-router')

const { verifyAuth } = require('../middleware/auth.middleware')
const { create } = require('../controller/label.controller.js')

const labelRouter = new Router({ prefix: '/label' })

labelRouter.post('/', verifyAuth, create)

module.exports = labelRouter
