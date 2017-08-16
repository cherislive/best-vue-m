<template>
<div>
<mt-field label="用户名" placeholder="请输入用户名"></mt-field>
<mt-field label="邮箱" placeholder="请输入邮箱"></mt-field>
<mt-button size="large" type="primary" @click="tryLogin">登录</mt-button>
</div>
</template>
<script>
import {getUserInfo} from 'src/service/getData'
import {mapMutations} from 'vuex'
export default {
  data () {
    return {}
  },
  mounted () {
  },
  methods: {
    ...mapMutations([
      'RECORD_USERINFO' // 登陆成功后保存用户信息
    ]),
    async tryLogin () {
      console.log('login')
      let res = await getUserInfo()
      if (res.code === 200) {
        this.RECORD_USERINFO(res.data)
        this.$router.push('/index')
      }
    }
  }
}
</script>
<style>
</style>
