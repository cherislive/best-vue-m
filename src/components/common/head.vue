/*
 * frame header
 */
<template>
<div class="mod-header">
<mt-header fixed title="示例项目">
  <router-link to="/" slot="left">
    <mt-button icon="back">back</mt-button>
  </router-link>
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
  methods: {
  }
}

</script>
<style scoped>
.mod-header{width:100%; height:40px;}
</style>
