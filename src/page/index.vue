<template>
<div>
  <head-top></head-top>
  <router-view class="mod-fm"></router-view>
  <tab-bar></tab-bar>
</div>
</template>
<script>
import headTop from '@/components/common/head'
import tabBar from '@/components/common/tab'
export default {
  data () {
    return {
      localCount: 6,
      hotcity: []
    }
  },
  mounted () {
  },
  components: {
    headTop, tabBar
  },
  methods: { // 处理分享逻辑
  }
}
</script>
<style>
.mod-fm{padding-bottom:55px;}
</style>
