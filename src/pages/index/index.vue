<template>
  <div class="app">
    <h3 @click="other">去其他页面</h3>
    <h3 @click="addNum">点击增加</h3>
    <h3>{{state}}</h3>
  </div>
</template>

<script>
  export default {
    mpType: 'page',
    data() {
      return {
        state: 0,
      }
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
    methods: {
      other() {
        wx.navigateTo({
          url: '/pagesOther/other/index'
        })
      },
      addNum() {
        this.state++;
        this.$store.dispatch('add', this.state)
      }
    },
    components: {},
    watch: {}
  }
</script>

<style lang="less" scoped>

</style>
