/*
 * @Author: yeyusong
 * @Date: 2021-03-12 09:34:50
 * @LastEditors: yeyusong
 * @LastEditTime: 2021-03-12 16:12:24
 * @Description:
 */
const app = require('./app/index')
require('./app/database')
const config = require('./app/config')

app.listen(config.APP_PORT, () => {
  console.log(`${config.APP_PORT}端口启动成功`)
})
