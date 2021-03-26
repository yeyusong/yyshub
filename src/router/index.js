/*
 * @Author: yeyusong
 * @Date: 2021-03-15 16:49:02
 * @LastEditors: yeyusong
 * @LastEditTime: 2021-03-15 17:10:50
 * @Description:
 */
const fs = require('fs')
const useRoutes = function (app) {
  fs.readdirSync(__dirname).forEach((file) => {
    if (file === 'index.js') return
    const router = require(`./${file}`)
    this.use(router.routes())
    this.use(router.allowedMethods())
  })
}
module.exports = useRoutes
