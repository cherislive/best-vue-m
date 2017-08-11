<template>
<transition>
  <router-view></router-view>
</transition>
</template>
<script>
import {cookie, removeCookie} from '@/config/mUtils'
import '@/assets/css/base.css'
import '@/assets/css/common.css'
// import {mapActions} from 'vuex'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  mounted () {
    if (!cookie('uToken')) {
      cookie('LoginUrlReferrer', location.pathname, {expires: new Date(Date.parse(new Date()) + 1000 * 60 * 60)})
      removeCookie('uToken')
      // removeCookie('uID')
      // this.$router.push('/login')
    } else {
    }
  },
  computed: {
  }
}
</script>
<style>
</style>
