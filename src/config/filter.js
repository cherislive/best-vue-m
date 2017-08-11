/**
 * 格式化时间
 * @name    formatDate
 * @param   {String}  13位unix时间戳
 * @return  {String}   格式化后的时间
*/
export const formatDate = (str) => {
  if (!str) return ''
  var date = new Date(str)
  var time = new Date().getTime() - date.getTime() // 现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
  if (time < 0) {
    return ''
  } else if ((time / 1000 < 30)) {
    return '刚刚'
  } else if (time / 1000 < 60) {
    return parseInt((time / 1000)) + '秒前'
  } else if ((time / 60000) < 60) {
    return parseInt((time / 60000)) + '分钟前'
  } else if ((time / 3600000) < 24) {
    return parseInt(time / 3600000) + '小时前'
  } else if ((time / 86400000) < 31) {
    return parseInt(time / 86400000) + '天前'
  } else if ((time / 2592000000) < 12) {
    return parseInt(time / 2592000000) + '月前'
  } else {
    return parseInt(time / 31536000000) + '年前'
  }
}
/*
* 对Date的扩展，将 Date 转化为指定格式的String
* 调用 new Date().format("yyyy-MM-dd");  年-月-日
*      new Date().format("yyyy-MM-dd hh:mm:ss");   年-月-日 时:分:秒
*      new Date().format("yyyy-MM-dd hh:mm:ss:S");     年-月-日 时:分:秒:毫秒
*/
export const dateFormat = function (str, fmt) {
  if (!str) return ''
  var date = new Date(str)
  var o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}

/**
 * 格式化角色
 * @name    formatDate
 * @param   {String}  13位unix时间戳
 * @return  {String}   格式化后的时间
*/
export const formatRole = (str) => {
  if (!str) return ''
  if (str === 'ADMIN') {
    return '超级管理员'
  } else if (str === 'CEO') {
    return 'CEO'
  } else if (str === 'BS') {
    return '事业总监'
  } else if (str === 'AM') {
    return '客服主管'
  } else if (str === 'BD') {
    return '销售'
  } else if (str === 'AE') {
    return '客服'
  } else if (str === 'MS') {
    return '媒介总监'
  } else if (str === 'MD') {
    return '媒介主管'
  } else if (str === 'ME') {
    return '媒介执行'
  } else if (str === 'OP') {
    return '运营'
  } else if (str === 'AC') {
    return '财务'
  } else if (str === 'LA') {
    return '法务'
  } else {
    return '其他角色'
  }
}

/**
 * 订单状态
 * @name    formatAuditStatus
 * @param   {String}  订单状态
 * @return  {String}  订单状态
*/
export const formatAuditStatus = (str) => {
  if (str === 0) {
    return '待审核'
  } else if (str === 1) {
    return '审核通过'
  } else if (str === 2) {
    return '驳回'
  } else if (str === 98) {
    return '拆单'
  } else if (str === 99) {
    return '终止'
  } else {
    return '审核状态待更新'
  }
}

/**
   * 金额格式化
   * 最大处理12位（带小数点） 保留两位小数，小数点后第三位舍弃
   * @param {num}   Number 要格式化的金额
   * @param {floor} Boolean 是否取整
   * @return  {String}  处理过的金额
*/
export const formatCurrency = function (num, floor) {
  if (num === undefined) {
    num = '0'
  }
  if (num && num * 1 < 0) {
    return num
  }
  num = num.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, '').replace(/\s/g, '') // trim
  num = num.replace(/^(\/-)*(\d+)\.(\d\d).*$/, '$1$2.$3')  // 保留两位小数 三位之后舍弃
  if (isNaN(num) || num === '' || num.length > 12) {
    return num
  }
  var cents = num.replace(/^\w*/ig, '')
  if (cents.length === 0 || cents.length === 1) {
    cents = '.00'
  }
  if (cents.length === 2) {
    cents = cents + '0'
  }
  num = parseInt(num).toString()
  for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++) {
    num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3))
  }
  if (cents === '.00' && floor === 'trunc') {
    cents = ''
  }
  return num + cents
  // if ((floor && floor !== 'trunc') || (cents === '.00')) {
  //   return num
  // } else {
  //   return num + cents
  // }
}
