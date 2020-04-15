<template>
  <div class="navbox">
    <div class="navbar">
      <div class="navbar-header">
        <i class="icon icon-category" />
        <a class="navbar-brand">LOGO</a>
      </div>
      <div class="navbar-collapse">
        <ul class="nav navbar-nav">
          <router-link to="/admin/register">1</router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  computed: {

  }
}
</script>

<style lang="stylus">
.navbox
	width 100%
	height 3.63rem
	background #FFFFFF
	border-bottom 1px solid #CCCCCC
	position fixed
	top 0
	left 0
	z-index 30
</style>
