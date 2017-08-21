<template>
<div>
<swiper :options="swiperOption" class="mod-banner">
  <swiper-slide><span class="banner1"></span></swiper-slide>
  <swiper-slide><span class="banner2"></span></swiper-slide>
  <swiper-slide><span class="banner1"></span></swiper-slide>
  <swiper-slide><span class="banner2"></span></swiper-slide>
  <div class="swiper-pagination" slot="pagination"></div>
</swiper>
<mt-field label="父组件" placeholder="请输入父组件数据" v-model.trim="form.enter" :attr="{ pattern: '[0-9]*' }"></mt-field>
<comp1 :compData="form.enter"  @compDataChange="setCompCallBack"></comp1>
<div v-if="endData" class="wrapper">结果数据：
  <mt-badge size="small" type="error">{{endData}}</mt-badge>
</div>
</div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import comp1 from 'src/components/comp1'
export default {
  data () {
    return {
      swiperOption: {
        autoplay: 3500,
        setWrapperSize: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true,
        loop: true
      },
      form: {
        enter: null
      },
      endData: null
    }
  },
  components: {
    swiper,
    swiperSlide,
    comp1
  },
  mounted () {
    this.initData()
  },
  methods: { // 处理分享逻辑
    async initData () {
    },
    setCompCallBack (a, b) {
      this.endData = a.a + a.b
    }
  }
}
</script>
<style>
.mod-banner{width:100%; height:1.5rem; overflow:hidden; position:relative;}
.mod-banner .swiper-slide{float:left; height:1.5rem; line-height:1.5rem; text-align:center; font-size:.22rem; }
.mod-banner .swiper-slide span{width:100%; height:100%; display:block; background-size:cover;}
.banner1{background-image:url(../../assets/imgs/banner-1.jpg);}
.banner2{background-image:url(../../assets/imgs/banner-2.png);}
.swiper-pagination{position:absolute; left:0; bottom:0; width:100%; text-align:center;}
.swiper-pagination-bullet{width:.08rem; height:.08rem; background:#fff; border-radius:50%; display:inline-block; margin:.05rem .02rem;}
.swiper-pagination-bullet-active{opacity:.6; background-color: #26a2ff;}
</style>
