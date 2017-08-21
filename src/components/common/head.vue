/*
 * frame header
 */
<template>
<div class="mod-header">
<mt-header fixed title="示例项目">
  <div slot="left" @click="$router.go(-1)">
    <mt-button icon="back">back</mt-button>
  </div>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>
</div>
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
  },
  beforeRouterEnter (to, from, next) {
    console.log(to, from, next)
  },
  methods: {
  }
}

</script>
<style scoped>
.mod-header{width:100%; height:40px;}
</style>
