import {baseUrl} from './env'
import {cookie, removeCookie} from './utils'

export default async(url = '', options = {}) => {
  options.method = options.method || 'fetch'
  options.data = options.data || {}
  options.headers = options.headers || {}
  options.contentType = options.contentType || false
  options.type = options.type ? options.type.toUpperCase() : 'POST'
  url = baseUrl + url

  let baseHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  options.headers = {...baseHeaders, ...options.headers}
  if (options.contentType === 'json') {
    options.headers['Content-Type'] = 'application/json'
  }

  let loginFilter = (res) => {
    // console.log('请求状态值：' + res.code)
    if (res && res.code === 90003) {
      // cookie('LoginUrlReferrer', location.pathname, {expires: new Date(Date.parse(new Date()) + 1000 * 60 * 60)})
      removeCookie('uToken')
      // removeCookie('uID')
      location.pathname = '/login'
    } else if (res.code === 200) {
      let tmpCookie = cookie('uToken')
      cookie('uToken', tmpCookie, {expires: new Date(Date.parse(new Date()) + 1000 * 60 * 60 * 4)}) // 2小时
    }
  }

  if (options.type === 'GET') {
    let dataStr = '' // 数据拼接字符串
    Object.keys(options.data).forEach(key => {
      dataStr += key + '=' + options.data[key] + '&'
    })
    if (dataStr !== '') {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
      url = url + '?' + dataStr
    }
  }

  if (window.fetch && options.method === 'fetch') {
    let requestConfig = {
      credentials: 'include',
      method: options.type,
      headers: options.headers,
      mode: 'cors',
      cache: 'force-cache'
    }
    if (options.contentType) { // application/json
      Object.defineProperty(requestConfig, 'body', {
        value: JSON.stringify(options.data)
      })
    } else if (options.type === 'POST' && typeof options.data === 'object') { // x-www-form-urlencoded
      let arrs = []
      for (let k in options.data) {
        arrs.push(k + '=' + options.data[k])
      }
      Object.defineProperty(requestConfig, 'body', {
        value: arrs.join('&')
      })
    }
    try {
      const response = await fetch(url, requestConfig)
      const responseJson = await response.json()
      loginFilter(responseJson)
      return responseJson
    } catch (error) {
      throw new Error(error)
    }
  } else {
    return new Promise((resolve, reject) => {
      let requestObj
      if (window.XMLHttpRequest) {
        requestObj = new XMLHttpRequest()
      } else if (window.ActiveXObject) {
        let ActiveXObject = window.ActiveXObject
        requestObj = new ActiveXObject('Microsoft.XMLHTTP')
      }

      let sendData = ''
      if (options.contentType) { // application/json
        sendData = JSON.stringify(options.data)
      } else if (options.type === 'POST') { // x-www-form-urlencoded
        if (typeof options.data === 'object') {
          let arrs = []
          for (let k in options.data) {
            arrs.push(k + '=' + options.data[k])
          }
          sendData = arrs.join('&')
        }
      }

      requestObj.open(options.type, url, true)
      Object.keys(options.headers).forEach(key => {
        requestObj.setRequestHeader(key, options.headers[key])
      })
      requestObj.send(sendData)

      requestObj.onreadystatechange = () => {
        if (requestObj.readyState === 4) {
          if (requestObj.status >= 200 && requestObj.status < 300) {
            let obj = requestObj.response
            if (typeof obj !== 'object') {
              obj = JSON.parse(obj)
            }
            loginFilter(obj)
            resolve(obj)
          } else {
            reject(requestObj)
          }
        }
      }
    })
  }
}

