/**
 * 获取设备信息
 * @name    browser
 * @return  {obj}  返回设备信息
*/
export const browser = (() => {
  const ua = navigator.userAgent
  return {
    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(ua),
    iOS: !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
    Android: ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1,
    iPhone: ua.indexOf('iPhone') > -1,
    iPad: ua.indexOf('iPad') > -1,
    WeChat: !!ua.match(/MicroMessenger/i),
    weibo: !!ua.match(/WeiBo/i),
    Qzone: ua.indexOf('Qzone/') !== -1,
    QQ: ua.match(/\sQQ/i)
  }
})()
/**
 * 获取localStorage和设置localStorage  持久化的本地存储
 * @name    localStorage
 * @param   {String}  名字
 * @param   {String}  值
 * @return  {String}  当只有名字时返回名字对应值
*/
export const localStorage = (name, value) => {
  if (!name) return
  if (typeof value !== 'undefined') { // set
    if (typeof value !== 'string') {
      value = JSON.stringify(value)
    }
    window.localStorage.setItem(name, value)
    return
  }
  return window.localStorage.getItem(name)
}
/**
 * 删除localStorage的快捷方法
 * @name    removeLocalStorage
 * @param   {String}  名字
*/
export const removeLocalStorage = name => {
  if (!name) return
  window.localStorage.removeItem(name)
}
/**
 * 获取sessionStorage和设置sessionStorage
 * @name    sessionStorage
 * @param   {String}  名字
 * @param   {String}  值
 * @return  {String}  当只有名字时返回名字对应值
*/
export const sessionStorage = (name, value) => {
  if (!name) return
  if (typeof value !== 'undefined') { // set
    if (typeof value !== 'string') {
      value = JSON.stringify(value)
    }
    window.sessionStorage.setItem(name, value)
    return
  } // get
  return window.sessionStorage.getItem(name)
}
/**
 * 删除sessionStorage的快捷方法
 * @name    removeSessionStorage
 * @param   {String}  名字
*/
export const removeSessionStorage = name => {
  if (!name) return
  window.sessionStorage.removeItem(name)
}

/**
 * 去掉空格
 * @param {string} 要去掉空格的字符串
 * @param   {Boolean} 是否去掉字符串中间的空格
 * @return  {String}  处理过的字符串
*/
export const trim = (str, isGlobal) => {
  if (!str) return
  // return str.replace(/^[\s\xa0]+|[\s\xa0]+$/g, '');
  // var result = str.replace(/(^\s+)|(\s+$)/g, "");
  var result = str.replace(/^[\s\xa0]+|[\s\xa0]+$/g, '')
  if (isGlobal) result = result.replace(/\s/g, '')
  return result
}
/**
 * 将Json数据转为String
 * @name    jsonToString
 * @param   {Object}  要转化的json对象
 * @param   {Boolean} 是否要进行转码以备URL传输
 * @return  {String}  转化后的字符串
*/
export const jsonToString = (json, isEncode) => {
  var strTemp = ''
  for (var key in json) {
    strTemp += key + '=' + (isEncode ? encodeURIComponent(json[key]) : json[key]) + '&'
  }
  return strTemp.slice(0, -1)
}

/**
 * 获取cookie和设置cookie
 * @name    cookie
 * @param   {String}  名字
 * @param   {String}  值
 * @param   {Object}  配置选项
 * @return  {String}  当只有名字时返回名字对应值
*/
export const cookie = (name, value, options) => {
  if (typeof value !== 'undefined') {
    options = options || {}
    if (value === null) {
      value = ''
      options = {...{}, ...options}
      options.expires = -1
    }
    var expires = ''
    if (options.expires && (typeof options.expires === 'number' || options.expires.toUTCString)) {
      var date
      if (typeof options.expires === 'number') {
        date = new Date()
        date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000))
      } else {
        date = options.expires
      }
      expires = '; expires=' + date.toUTCString()
    }
    var path = options.path ? '; path=' + (options.path) : ';path=/'
    var domain = options.domain ? '; domain=' + (options.domain) : ''
    var secure = options.secure ? '; secure' : ''
    document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('')
  } else {
    var cookieValue = null
    if (document.cookie && document.cookie !== '') {
      var cookies = document.cookie.split(';')
      for (var i = 0; i < cookies.length; i++) {
        var cookie = trim(cookies[i])
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1))
          break
        }
      }
    }
    return cookieValue
  }
}

/**
 * 删除cookie的快捷方法
 * @name    removeCookie
 * @param   {String}  名字
*/
export const removeCookie = function (key) {
  cookie(key, '', {expires: -1})
}

/*
* 对Date的扩展，将 Date 转化为指定格式的String
* 调用 new Date().format("yyyy-MM-dd");  年-月-日
*      new Date().format("yyyy-MM-dd hh:mm:ss");   年-月-日 时:分:秒
*      new Date().format("yyyy-MM-dd hh:mm:ss:S");     年-月-日 时:分:秒:毫秒
*/
export const dateFormat = function (str, fmt) {
  if (!fmt) {
    let tmpData = str ? new Date(str) : new Date()
    return Date.parse(tmpData)
  }
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
 * 获取浏览器参数
 * @param   {String}  参数key
 * @return  {String}  浏览器参数
*/
export const getQueryString = (name) => {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  var r = window.location.search.substr(1).match(reg)
  if (r !== null) {
    return unescape(r[2])
  }
  return null
}

/**
 * 获取style样式
 */
export const getStyle = (element, attr, NumberMode = 'int') => {
  let target
  // scrollTop 获取方式不同，没有它不属于style，而且只有document.body才能用
  if (attr === 'scrollTop') {
    target = element.scrollTop
  } else if (element.currentStyle) {
    target = element.currentStyle[attr]
  } else {
    target = document.defaultView.getComputedStyle(element, null)[attr]
  }
  // 在获取 opactiy 时需要获取小数 parseFloat
  return NumberMode === 'float' ? parseFloat(target) : parseInt(target)
}

/**
 * 显示返回顶部按钮
 * @return  {String}  是否达到目标点
 */
export const showBack = callback => {
  let requestFram
  let oldScrollTop

  document.addEventListener('scroll', () => {
    showBackFun()
  }, false)
  document.addEventListener('touchstart', () => {
    showBackFun()
  }, {passive: true})

  document.addEventListener('touchmove', () => {
    showBackFun()
  }, {passive: true})

  document.addEventListener('touchend', () => {
    oldScrollTop = document.body.scrollTop
    moveEnd()
  }, {passive: true})

  const moveEnd = () => {
    requestFram = requestAnimationFrame(() => {
      if (document.body.scrollTop !== oldScrollTop) {
        oldScrollTop = document.body.scrollTop
        moveEnd()
      } else {
        cancelAnimationFrame(requestFram)
      }
      showBackFun()
    })
  }

  // 判断是否达到目标点
  const showBackFun = () => {
    if (document.body.scrollTop > 500) {
      callback(true)
    } else {
      callback(false)
    }
  }
}

/**
 * 运动效果
 * @param {HTMLElement} element   运动对象，必选
 * @param {JSON}    target  属性：目标值，必选
 * @param {number}    duration  运动时间，可选
 * @param {string}    mode    运动模式，可选
 * @param {function}  callback  可选，回调函数，链式动画
 */
export const animate = (element, target, duration = 400, mode = 'ease-out', callback) => {
  clearInterval(element.timer)
  // 判断不同参数的情况
  if (duration instanceof Function) {
    callback = duration
    duration = 400
  } else if (duration instanceof String) {
    mode = duration
    duration = 400
  }

  // 判断不同参数的情况
  if (mode instanceof Function) {
    callback = mode
    mode = 'ease-out'
  }

  // 获取dom样式
  const attrStyle = attr => {
    if (attr === 'opacity') {
      return Math.round(getStyle(element, attr, 'float') * 100)
    } else {
      return getStyle(element, attr)
    }
  }
  // 根字体大小，需要从此将 rem 改成 px 进行运算
  const rootSize = parseFloat(document.documentElement.style.fontSize)

  const unit = {}
  const initState = {}

  // 获取目标属性单位和初始样式值
  Object.keys(target).forEach(attr => {
    if (/[^\d^[\].]+/gi.test(target[attr])) { // /[^\d^\.]+/
      unit[attr] = target[attr].match(/[^\d^[\].]+/gi)[0] || 'px'
    } else {
      unit[attr] = 'px'
    }
    initState[attr] = attrStyle(attr)
  })

  // 去掉传入的后缀单位
  Object.keys(target).forEach(attr => {
    if (unit[attr] === 'rem') {
      target[attr] = Math.ceil(parseInt(target[attr]) * rootSize)
    } else {
      target[attr] = parseInt(target[attr])
    }
  })

  let flag = true // 假设所有运动到达终点
  const remberSpeed = {} // 记录上一个速度值,在ease-in模式下需要用到
  element.timer = setInterval(() => {
    Object.keys(target).forEach(attr => {
      let iSpeed = 0 // 步长
      let status = false // 是否仍需运动
      let iCurrent = attrStyle(attr) || 0 // 当前元素属性址
      let speedBase = 0 // 目标点需要减去的基础值，三种运动状态的值都不同
      let intervalTime // 将目标值分为多少步执行，数值越大，步长越小，运动时间越长
      switch (mode) {
        case 'ease-out':
          speedBase = iCurrent
          intervalTime = duration * 5 / 400
          break
        case 'linear':
          speedBase = initState[attr]
          intervalTime = duration * 20 / 400
          break
        case 'ease-in':
          let oldspeed = remberSpeed[attr] || 0
          iSpeed = oldspeed + (target[attr] - initState[attr]) / duration
          remberSpeed[attr] = iSpeed
          break
        default:
          speedBase = iCurrent
          intervalTime = duration * 5 / 400
      }
      if (mode !== 'ease-in') {
        iSpeed = (target[attr] - speedBase) / intervalTime
        iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed)
      }
      // 判断是否达步长之内的误差距离，如果到达说明到达目标点
      switch (mode) {
        case 'ease-out':
          status = iCurrent !== target[attr]
          break
        case 'linear':
          status = Math.abs(Math.abs(iCurrent) - Math.abs(target[attr])) > Math.abs(iSpeed)
          break
        case 'ease-in':
          status = Math.abs(Math.abs(iCurrent) - Math.abs(target[attr])) > Math.abs(iSpeed)
          break
        default:
          status = iCurrent !== target[attr]
      }

      if (status) {
        flag = false
        // opacity 和 scrollTop 需要特殊处理
        if (attr === 'opacity') {
          element.style.filter = 'alpha(opacity:' + (iCurrent + iSpeed) + ')'
          element.style.opacity = (iCurrent + iSpeed) / 100
        } else if (attr === 'scrollTop') {
          element.scrollTop = iCurrent + iSpeed
        } else {
          element.style[attr] = iCurrent + iSpeed + 'px'
        }
      } else {
        flag = true
      }

      if (flag) {
        clearInterval(element.timer)
        if (callback) {
          callback()
        }
      }
    })
  }, 20)
}
