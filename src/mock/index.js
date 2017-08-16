import Mock from 'mockjs'
import {listData} from './listData'
import {userInfo} from './userInfo'

let data = [].concat(userInfo, listData)

data.forEach(function (res) {
  Mock.mock(res.path, res.rtype, res.data)
})

export default Mock
