import Mock from 'mockjs'
import {listData} from './listData'

let data = [].concat(listData)

data.forEach(function (res) {
  Mock.mock(res.path, res.rtype, res.data)
})

export default Mock
