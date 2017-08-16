<template>
<div>
  <transition>
    <router-view></router-view>
  </transition>
</div>
</template>
<script>
import {cookie, removeCookie} from '@/config/mUtils'
import '@/assets/css/base.css'
import '@/assets/css/common.css'
import {mapActions} from 'vuex'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  methods: {
    ...mapActions([
      'getUserInfo'
    ])
  },
  mounted () {
    if (!cookie('uToken')) {
      cookie('LoginUrlReferrer', location.pathname, {expires: new Date(Date.parse(new Date()) + 1000 * 60 * 60)})
      removeCookie('uToken')
      this.$router.push('/login')
    } else {
      this.getUserInfo() // 获取用户信息
    }
  },
  computed: {
  }
}
</script>
<style>
</style>
