<template>
  <div id="app">
    <navBar />
    <div class="nav-placeholder-box" />
    <router-view />
    <tabeBar />
  </div>
</template>

<script>
import navBar from 'components/navBar/navBar.vue'
import tabeBar from 'components/tabeBar/tabeBar.vue'
export default {
  components: {
    navBar: navBar,
    tabeBar: tabeBar
  }
}
</script>

<style lang="stylus">
/* 16px = 1rem */
#app
  font-family -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif
  -webkit-font-smoothing antialiased
  font-size 16px
  color #2c3e50
  .nav-placeholder-box
    width 100%
    height 3.63rem
</style>
