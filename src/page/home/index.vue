<template>
<div>
<swiper :options="swiperOption" class="mod-banner">
  <swiper-slide><span class="banner1"></span></swiper-slide>
  <swiper-slide><span class="banner2"></span></swiper-slide>
  <swiper-slide><span class="banner1"></span></swiper-slide>
  <swiper-slide><span class="banner2"></span></swiper-slide>
  <div class="swiper-pagination" slot="pagination"></div>
</swiper>
</div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
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
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  mounted () {
    this.initData()
  },
  methods: { // 处理分享逻辑
    async initData () {
    }
  }
}
</script>
<style>
.mod-banner{width:100%; height:1.2rem; overflow:hidden; position:relative;}
.mod-banner .swiper-slide{float:left; height:1.2rem; line-height:1.2rem; text-align:center; font-size:.22rem; }
.mod-banner .swiper-slide span{width:100%; height:100%; display:block; background-size:cover;}
.banner1{background-image:url(../../assets/imgs/banner-1.jpg);}
.banner2{background-image:url(../../assets/imgs/banner-2.png);}
.swiper-pagination{position:absolute; left:0; bottom:0; width:100%; text-align:center;}
.swiper-pagination-bullet{width:.08rem; height:.08rem; background:#fff; border-radius:50%; display:inline-block; margin:.05rem .02rem;}
.swiper-pagination-bullet-active{opacity:.6; background-color: #26a2ff;}
</style>
