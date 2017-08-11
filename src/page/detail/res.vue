<template>
<div>
<div>
  <h3>RES {{detailId}}</h3>
</div>
</div>
</template>

<script>
export default {
  data () {
    return {
      detailId: ''
    }
  },
  components: {
  },
  computed: {
  },
  mounted () {
    this.detailId = this.$route.params.id
    this.initData()
  },
  methods: {
    async initData () {
    }
  }
}
</script>
<style>
</style>
