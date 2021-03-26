/*
 * @Author: yeyusong
 * @Date: 2021-03-12 09:43:42
 * @LastEditors: yeyusong
 * @LastEditTime: 2021-03-15 17:10:59
 * @Description:
 */
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const errorHandler = require('./error-handle')
const useRoutes = require('../router/index')
const app = new Koa()

app.useRoutes = useRoutes

app.use(bodyParser())
app.useRoutes()
app.on('error', errorHandler)

module.exports = app
