/*
 * @Author: yeyusong
 * @Date: 2021-03-15 13:56:30
 * @LastEditors: yeyusong
 * @LastEditTime: 2021-03-29 17:10:30
 * @Description:
 */
const jwt = require('jsonwebtoken')

const errorType = require('../constants/error-types')
const userService = require('../service/user.service')
const authService = require('../service/auth.service')
const md5password = require('../utils/password-handle')
const { PUBLIC_KEY } = require('../app/config')

const verifyLogin = async (ctx, next) => {
  // 获取用户名和密码
  const { name, password } = ctx.request.body
  // 判断用户名和密码是否为空
  if (!name || !password) {
    const error = new Error(errorType.NAME_OR_PASSWORD_IS_REQUIRED)
    return ctx.app.emit('error', error, ctx)
  }
  // 判断用户是否存在
  const res = await userService.getUserByName(name)
  const user = res[0]
  if (!user) {
    const error = new Error(errorType.USER_DOES_NOT_EXISTS)
    return ctx.app.emit('error', error, ctx)
  }
  // 判断密码是否正确（加密）
  if (md5password(password) !== user.password) {
    const error = new Error(errorType.PASSWPRD_IS_INCORRENT)
    return ctx.app.emit('error', error, ctx)
  }

  ctx.user = user

  await next()
}

const verifyAuth = async (ctx, next) => {
  // 获取token
  const authorization = ctx.headers.authorization
  if (!authorization) {
    const error = new Error(errorType.UNAUTHORIZTION)
    return ctx.app.emit('error', error, ctx)
  }
  const token = authorization.replace('Bearer ', '')
  // 验证token
  try {
    const res = jwt.verify(token, PUBLIC_KEY, {
      algorithms: ['RS256'],
    })
    ctx.user = res
    await next()
  } catch (err) {
    const error = new Error(errorType.UNAUTHORIZTION)
    ctx.app.emit('error', error, ctx)
  }
}

const verifyPermission = async (ctx, next) => {
  // 获取参数
  const [resKey] = Object.keys(ctx.params)
  const tableName = resKey.replace('Id', '')
  const resId = ctx.params[resKey]
  const { id } = ctx.user
  // 查询是否有权限
  try {
    const isPermission = await authService.checkResource(tableName, resId, id)
    if (!isPermission) throw new Error()
    await next()
  } catch (err) {
    const error = new Error(errorType.UNPERMISSION)
    return ctx.app.emit('error', error, ctx)
  }
}

module.exports = { verifyLogin, verifyAuth, verifyPermission }
