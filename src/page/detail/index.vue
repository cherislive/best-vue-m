<template>
<div>
details
<div v-load-more="loaderMore" v-if="dlist">
  <div v-for="item in dlist.data">{{item.customer}}<br><br><br>{{item.creatTime}}</div>

  <div v-if="showLoading">
    <span>正在加载</span>
  </div>
</div>
</div>
</template>
<script>
import { getList } from '@/service/getData'
import {loadMore} from '@/config/mixin'
export default {
  data () {
    return {
      dlist: null,
      offset: 1, // 批次加载数据 每次+1
      pageSize: 10, // 每页显示数据条数
      preventRepeatReuqest: false, // 到达底部加载数据，防止重复加载
      showLoading: true, // 显示加载动画
      touchend: false // 没有更多数据
    }
  },
  components: {
  },
  mixins: [loadMore],
  mounted () {
    this.initData()
  },
  methods: {
    async initData () {
      let res = await getList()
      console.log(res)
      this.dlist = res
    },
    async loaderMore () {
      if (this.touchend) {
        return
      }
      // 防止重复请求
      if (this.preventRepeatReuqest) {
        return
      }
      this.showLoading = true
      this.preventRepeatReuqest = true

      // 数据的定位+1
      this.offset++
      let res = await getList()
      if (!res.data) {
        this.showLoading = false
        this.touchend = true
        this.preventRepeatReuqest = false
        return
      }
      this.showLoading = false
      this.dlist.data = [...this.dlist.data, ...res.data]
      // 当获取数据小于20，说明没有更多数据，不需要再次请求数据
      if (res.data.length < this.pageSize) {
        this.touchend = true
        return
      }
      this.preventRepeatReuqest = false
    }
  }
}
</script>
<style>
</style>
