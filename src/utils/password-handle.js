/*
 * @Author: yeyusong
 * @Date: 2021-03-15 11:56:38
 * @LastEditors: yeyusong
 * @LastEditTime: 2021-03-15 12:00:13
 * @Description:
 */
// 这个是node自带的
const crypto = require('crypto')
const md5password = (password) => {
  const md5 = crypto.createHash('md5')
  const res = md5.update(password).digest('hex')
  return res
}

module.exports = md5password
