<template>
<div>
  <head-top></head-top>
  <router-view></router-view>
</div>
</template>
<script>
import headTop from '@/components/common/head'
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
    headTop
  },
  methods: { // 处理分享逻辑
  }
}
</script>
<style>
</style>
