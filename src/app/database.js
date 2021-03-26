/*
 * @Author: yeyusong
 * @Date: 2021-03-12 14:20:15
 * @LastEditors: yeyusong
 * @LastEditTime: 2021-03-22 11:16:28
 * @Description:
 */
const mysql = require('mysql2')
const config = require('./config')
const connections = mysql.createPool({
  host: config.MYSQL_HOST,
  port: config.MYSQL_PORT,
  database: config.MYSQL_DATABASE,
  user: config.MYSQL_USER,
  password: config.MYSQL_PASSWORD,
})
connections.getConnection((err, conn) => {
  conn.connect((err) => {
    if (err) {
      console.log('数据库连接失败啦', err)
    } else {
      console.log('数据库连接成功啦')
    }
  })
})

module.exports = connections.promise()
