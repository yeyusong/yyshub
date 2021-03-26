/*
 * @Author: yeyusong
 * @Date: 2021-03-12 16:55:29
 * @LastEditors: yeyusong
 * @LastEditTime: 2021-03-15 13:19:28
 * @Description:
 */
const errorType = require('../constants/error-types')
const service = require('../service/user.service')
const md5password = require('../utils/password-handle')
const verifyUser = async (ctx, next) => {
  // 获取用户名，密码
  const { name, password } = ctx.request.body
  // 判断用户名密码不为空
  if (!name || !password) {
    const error = new Error(errorType.NAME_OR_PASSWORD_IS_REQUIRED)
    return ctx.app.emit('error', error, ctx)
  }
  // 判断用户名是否没被注册过
  const res = await service.getUserByName(name)
  if (res.length) {
    const error = new Error(errorType.NAME_ALREADY_EXISTS)
    return ctx.app.emit('error', error, ctx)
  }
  await next()
}
const handlePassword = async (ctx, next) => {
  const { password } = ctx.request.body
  ctx.request.body.password = md5password(password)
  await next()
}
module.exports = { verifyUser, handlePassword }
