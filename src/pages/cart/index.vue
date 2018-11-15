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
    beforeCreate() {
      console.log('Page Vue beforeCreate')
    },
    created() {
      console.log('Page Vue created')
      var appInstance = getApp()
      console.log(appInstance.globalData) // I am global data
    },
    beforeMount() {
      console.log('Page Vue beforeMount')
    },
    mounted() {
      console.log('Page Vue mounted')
    },
    onLoad: function(options) {
      // Do some initialize when page load.
      console.log('Page onLoad')
    },
    onReady: function() {
      // Do something when page ready.
      console.log('Page onReady')
    },
    onShow: function() {
      // Do something when page show.
      console.log('Page onShow')
    },
    onHide: function() {
      // Do something when page hide.
      console.log('Page onHide')
    },
    onUnload: function() {
      // Do something when page close.
      console.log('Page onUnload')
    },
    methods: {},
    components: {},
    // computed: { ...mapGetters([
    //     'num'
    //   ])
    // },
    computed: mapGetters([
      'num'
    ]),
    watch: {}
  }
</script>

<style lang="less" scoped>

</style>
