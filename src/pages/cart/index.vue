<template>
  <div class="app">
    <h3>获取到vuex的值：{{num}}</h3>
  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex';
  export default {
    mpType: 'page',
    data() {
      return {}
    },
    onLoad(options) {},
    onReady() {},
    onShow() {},
    onHide() {},
    onUnload() {},
    methods: {},
    computed: { ...mapGetters([
        'num'
      ])
    },
    watch: {},
    components: {},
  }
</script>

<style lang="less" scoped>

</style>
