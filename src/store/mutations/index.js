/*
 * 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
 * 存放如何更改状态
 * mutation 必须是同步函数
 *
 **/
import {
  RECORD_USERINFO,
  GET_USERINFO,
  UNREAD_NUM,
  OUT_LOGIN
} from './mutation-types.js'
import {cookie, removeCookie} from '@/config/mUtils'
// export const ADD_COUNT = 'ADD_COUNT'
// export const RECORD_USERINFO = 'RECORD_USERINFO'

export default {
  // 测试用
  [UNREAD_NUM] (state, type) {
    state.unreadNum = type || 0
  },

  // 登录用 记录用户信息
  [RECORD_USERINFO] (state, info) {
    state.userInfo = info
    state.login = true
    let validity = 30
    cookie('uToken', info.uToken, {expires: validity})
    cookie('uID', info.id)
  },

  // 获取用户信息用 获取用户信息存入vuex
  [GET_USERINFO] (state, info) {
    if (state.userInfo && (state.userInfo.uToken !== info.uToken)) {
      return
    }
    if (info.uToken) {
      state.userInfo = {...info}
      let validity = 30
      cookie('uToken', info.uToken, {expires: validity})
      cookie('uID', info.id)
    } else {
      state.userInfo = null
      state.login = false
      removeCookie('uToken')
      removeCookie('uID')
    }
  },
  // 退出
  [OUT_LOGIN] (state) {
    state.userInfo = null
    removeCookie('uToken')
    // removeCookie('uID')
  }
}

