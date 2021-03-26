/*
 * @Author: yeyusong
 * @Date: 2021-03-15 09:48:53
 * @LastEditors: yeyusong
 * @LastEditTime: 2021-03-24 17:14:44
 * @Description:
 */
const errorTypes = require('../constants/error-types')
const errorHandler = (error, ctx) => {
  let status, message
  switch (error.message) {
    case errorTypes.NAME_OR_PASSWORD_IS_REQUIRED:
      status = 400
      message = '用户名或密码不能为空'
      break
    case errorTypes.NAME_ALREADY_EXISTS:
      status = 409
      message = '该用户已经存在'
      break
    case errorTypes.USER_DOES_NOT_EXISTS:
      status = 400
      message = '该用户不存在'
      break
    case errorTypes.PASSWPRD_IS_INCORRENT:
      status = 400
      message = '密码错误'
      break
    case errorTypes.UNPERMISSION:
      status = 401
      message = '暂无权限'
      break
    case errorTypes.UNAUTHORIZTION:
      status = 401
      message = '无效的token'
      break
    default:
      status = 404
      message = 'not found'
  }
  ctx.status = status
  ctx.body = message
}
module.exports = errorHandler
