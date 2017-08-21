/*
 * frame tabbar
 */
<template>
<mt-tabbar v-model.async="currentTab" fixed>
  <mt-tab-item id="home" @click.native="goTo('index')">
    <img slot="icon" src="../../assets/imgs/icon-tabbar.png">
    home
  </mt-tab-item>
  <mt-tab-item id="detail" @click.native="goTo('detail')">
    <img slot="icon" src="../../assets/imgs/icon-tabbar.png">
    detail
  </mt-tab-item>
  <mt-tab-item id="discover" @click.native="goTo('discover')">
    <img slot="icon" src="../../assets/imgs/icon-tabbar.png">
    discover
  </mt-tab-item>
  <mt-tab-item id="icenter" @click.native="goTo('icenter')">
    <img slot="icon" src="../../assets/imgs/icon-tabbar.png">
    icenter
  </mt-tab-item>
</mt-tabbar>
</template>
<script>
export default {
  data () {
    return {
      currentTab: null
    }
  },
  computed: {
  },
  beforeRouterEnter (to, from, next) {
    next(() => {
      console.log('BBBBBB', to, from, next)
    })
  },
  mounted () {
    console.log('AAAAAAAAAA')
    this.onRoutes()  // 初始化路由
  },
  methods: {
    onRoutes () { // 设置默认选中
      let routePath = this.$route.path.split('/')
      if (routePath[1] === 'index') {
        routePath = 'home'
      } else {
        routePath = routePath[1]
      }
      this.currentTab = routePath || 'home'
    },
    goTo (type) {
      let routerType = type || 'home'
      this.$router.push(`/${routerType}`)
    }
  }
}

</script>
<style scoped>
</style>
