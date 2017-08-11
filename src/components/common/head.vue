/*
 * frame header
 */
<template>
    <header class='app-header'>
      <span @click="tryJumpURL('detail')">详情</span>
      <span @click="tryJumpURL('res')">结果</span>
    </header>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  computed: {
  },
  mounted () {
    // this.initData()  // 初始化数据
  },
  methods: {
    getRandomNum (min, max) {
      if (!max) {
        max = min
        min = 0
      }
      return min + Math.floor(Math.random() * (max - min + 1))
    },
    tryJumpURL (type) {
      let detailId = this.getRandomNum(10, 1000)
      if (type === 'detail') {
        this.$router.push(`/detail/${detailId}`)
      }
      if (type === 'res') {
        this.$router.push(`/detail/res/${detailId}`)
      }
    }
  }
}

</script>
<style scoped>
</style>
