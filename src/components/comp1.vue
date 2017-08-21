/*
 * frame tabbar
 */
<template>
<div>
<!-- <input type="number" name="" pattern="[0-9]*">  type="date/number/tel" -->
<mt-field label="子组件" placeholder="请输入子组件数据"  v-model.trim="form.subEnter"  type="number" :attr="{ pattern: '[0-9]*' }"></mt-field>
<div class="wrapper">
<div v-if="compData" class="mod-block">父组件数据：
  <mt-badge size="small" type="primary">{{compData}}</mt-badge>
</div>
<div v-if="form.subEnter" class="mod-block">子组件数据：
  <mt-badge size="small" type="success">{{form.subEnter}}</mt-badge>
</div>
<mt-button size="large" type="primary" @click="emitData">add</mt-button>
</div>
</div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        subEnter: null
      }
    }
  },
  props: ['compData'],
  computed: {
  },
  mounted () {
  },
  methods: {
    emitData () {
      this.$emit('compDataChange', {a: this.compData, b: this.form.subEnter}, true)
    }
  },
  watch: {
    compData: function (value) {
      console.log(value)
    }
  }
}

</script>
<style>
</style>
