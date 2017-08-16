import fetch from '@/config/fetch'
// import {cookie} from '@/config/mUtils' // trim

// export const fileSign = (file) => fetch('/api/file/sign', { // 文件上传令牌
//   data: {file}, headers: {ssid: cookie('uToken')}, contentType: 'file'
// })
export const getUserInfo = (jsonData) => fetch('/apix/user/info', { // 获取用户信息
  method: 'XML'
})

export const getList = (acct, passwd) => fetch('/apix/details/list', { // 登录
  method: 'XML'
})
