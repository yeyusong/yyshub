/*
 * @Author: yeyusong
 * @Date: 2021-03-30 15:44:36
 * @LastEditors: yeyusong
 * @LastEditTime: 2021-03-30 16:34:10
 * @Description:
 */
const service = require('../service/label.service')

const verifyLabelExists = async (ctx, next) => {
  const { labels } = ctx.request.body
  const newLabels = []
  for (let name of labels) {
    const labelRes = await service.getLabelByName(name)
    const label = { name }
    if (!labelRes) {
      // 创建标签数据
      const res = await service.create(name)
      label.id = res.insertId
    } else {
      label.id = labelRes.id
    }
    newLabels.push(label)
  }
  ctx.labels = newLabels
  await next()
}
module.exports = { verifyLabelExists }
