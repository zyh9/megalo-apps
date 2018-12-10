<template>
  <div class="app">
    <h3 @click="other">去其他页面</h3>
    <h3 @click="addNum">点击增加</h3>
    <h3>{{state}}</h3>
    <ul>
      <li class="_li" v-for="(v,i) in list" :key="i" @click="add(v)"><span>{{v.text}}</span><span>{{v.num}}</span></li>
    </ul>
  </div>
</template>

<script>
  export default {
    mpType: 'page',
    data() {
      return {
        state: 0,
        list: [{
          text: '分类1'
        }, {
          text: '分类2'
        }, {
          text: '分类3'
        }]
      }
    },
    // beforeCreate() {
    //   console.log('Page Vue beforeCreate')
    // },
    // created() {
    //   console.log('Page Vue created')
    //   var appInstance = getApp()
    //   console.log(appInstance.globalData) // I am global data
    // },
    // beforeMount() {
    //   console.log('Page Vue beforeMount')
    // },
    // mounted() {
    //   console.log('Page Vue mounted')
    // },
    // onLoad(options) {
    //   // Do some initialize when page load.
    //   console.log('Page onLoad')
    // },
    // onReady() {
    //   // Do something when page ready.
    //   console.log('Page onReady')
    // },
    onShow() {
      // Do something when page show.
      // console.log('Page onShow')
      this.list.forEach(e => {
        // e.num = 0;
        this.$set(e, 'num', 0)
      });
    },
    // onHide() {
    //   // Do something when page hide.
    //   console.log('Page onHide')
    // },
    // onUnload() {
    //   // Do something when page close.
    //   console.log('Page onUnload')
    // },
    methods: {
      other() {
        wx.navigateTo({
          url: '/pagesOther/other/index'
        })
      },
      addNum() {
        this.state++;
        this.$store.dispatch('add', this.state)
      },
      add(v) {
        this.list.forEach(e => {
          if (e.text == v.text) {
            v.num++;
            // e.num = v.num++;
            this.$set(e, 'num', v.num)
          }
        })
        console.log(this.list)
      }
    },
    components: {},
    watch: {}
  }
</script>

<style lang="less">
  li {
    display: flex;
    justify-content: space-between;
  }
</style>
