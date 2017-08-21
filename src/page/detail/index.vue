<template>
<div>
<div v-load-more="loaderMore" v-if="dlist">
  <div v-for="item in dlist.data">
    <router-link :to="{path: 'detail/' + item.id, query:{pageSize, itemId: item.id}}" tag='div' class="list-item">
      <div class="hd">
        <span class="avatar"><img :src="item.avatar"></span>
        <div class="author">
          <h3>{{item.member}}</h3>
        </div>
      </div>
      <div class="bd">
        <div class="wrap-img"><img :src="item.wrapImg"></div>
        <div class="title">{{item.title}}</div>
        <div class="abstract">{{item.abstract}}</div>
      </div>
    </router-link>
  </div>
  <div v-if="showLoading" class="tc">
    <span>正在加载</span><br>
  </div>
</div>

<!-- backtop start -->
<div class="mod-return-top" v-if="showBackStatus" @click="backTop">↑</div>
<!-- backtop end -->

</div>
</template>
<script>
import {getList} from '@/service/getData'
import {loadMore} from '@/config/mixin'
import {showBack, animate} from '@/config/mUtils'
export default {
  data () {
    return {
      dlist: null, // 列表数据
      offset: 1, // 批次加载数据 每次+1
      pageSize: 10, // 每页显示数据条数
      preventRepeatReuqest: false, // 到达底部加载数据，防止重复加载
      showLoading: true, // 显示加载动画
      touchend: false, // 没有更多数据
      showBackStatus: false // 返回顶部按钮状态
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
      this.setBackState()
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
    },
    setBackState () {
      // 监听scrollTop的值，达到一定程度后显示返回顶部按钮
      showBack(status => {
        this.showBackStatus = status
      })
    },
    // 返回顶部
    backTop () {
      animate(document.body, {scrollTop: '2rem'}, 400, 'ease-out')
    }
  }
}
</script>
<style>
.list-item{padding:.15rem .1rem; background:#fff; border-top:.01rem solid #f0f0f0; border-bottom:.01rem solid #f0f0f0; margin-top:-.01rem;}
.list-item .hd{overflow:hidden;}
.list-item .hd .avatar{float:left; width:.34rem; height:.34rem; display:block; border-radius:50%; overflow:hidden;}
.list-item .hd .avatar img{width:.34rem; height:.34rem;}
.list-item .hd .author{ margin-left:.4rem; line-height:.34rem; font-size:.12rem;}
.list-item .bd{padding:.15rem 0;}
.list-item .bd .wrap-img, .list-item .bd .wrap-img img{width:100%; height:1.2rem; display:block;}
.list-item .bd .wrap-img{background:url(http://upload-images.jianshu.io/upload_images/742794-d2e48c4a5f84110e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/690/h/690) no-repeat 50% 50%; background-size:cover;}
.list-item .bd .wrap-img img{opacity:.85;}
.list-item .bd .title{padding-top:.15rem; font-size:.18rem; line-height:.28rem;}
.list-item .bd .abstract{color:#999;}

.mod-return-top{position:fixed; right:.1rem; bottom:60px; z-index:99; width:.4rem; height:.4rem; background:rgba(0,0,0,.2); color:#fff; text-align:center; line-height:.4rem; font-size:.2rem;}
</style>
