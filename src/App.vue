<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import './assets/iconfont/iconfont.css'
import './assets/style/common.less'
export default {
  name: 'app'
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
