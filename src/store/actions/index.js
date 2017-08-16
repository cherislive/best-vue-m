// action 触发 store 的更新状态 Action 提交的是 mutation，而不是直接变更状态。  Action 可以包含任意异步操作
import { getUserInfo } from '@/service/getData'
import {cookie} from '@/config/mUtils'
import {
  GET_USERINFO
} from '@/store/mutations/mutation-types.js'

export default {
  async getUserInfo ({commit}, state) {
    let res = await getUserInfo(cookie('uID'))
    commit(GET_USERINFO, res.data)
  }
}
