<template>
  <div class="tabe-bar">
    <ul>
      <li class="active">首页</li>
      <li>好友</li>
      <li>应用</li>
      <li>社区</li>
      <li>我的</li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus">
.tabe-bar
	width 100%
	height 3.63rem
	position fixed
	bottom 0
	z-index 999
	ul
		position relative
		height 100%
		display flex
		align-items center
		li
			display flex
			justify-content center
			align-items center
			width 20%
			height 100%
			text-align center
		.active
			background yellow
</style>
