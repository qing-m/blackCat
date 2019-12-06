<template>
  <div class="Layout">
		<p>Layout</p>
		<router-view></router-view>
  </div>
</template>

<script>
export default {
	name: 'Layout'
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "~common/stylus/mixin"
@import "~common/stylus/variable"
</style>
