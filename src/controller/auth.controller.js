/*
 * @Author: yeyusong
 * @Date: 2021-03-15 13:37:01
 * @LastEditors: yeyusong
 * @LastEditTime: 2021-03-22 13:41:33
 * @Description:
 */
const jwt = require('jsonwebtoken')
const { PRIVATE_KEY } = require('../app/config')

class AuthController {
  async login(ctx, next) {
    const { id, name } = ctx.user
    const token = jwt.sign({ id, name }, PRIVATE_KEY, {
      expiresIn: 60 * 60 * 24,
      algorithm: 'RS256',
    })
    ctx.body = {
      id,
      name,
      token,
    }
  }

  async success(ctx, next) {
    ctx.body = '授权成功'
  }
}
module.exports = new AuthController()
