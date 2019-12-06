<template>
  <div class="sideItem-container">
		<div class="item-wrapper">
			<p>
				{{item.meta.title}}
				<i class="icon icon-next"></i>
			</p>
		</div>
  </div>
</template>

<script>
export default {
	name: 'sideItem',
	props: {
		item: {
			type: Object,
			required: true
		},
		isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
	},
	methods: {

	}
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "~common/stylus/mixin"
@import "~common/stylus/variable"
.sideItem-container
	.item-wrapper
		width 100%
		height 70px
		display flex
		align-items center
		box-sizing border-box
		padding 0 50px
		> p
			width 100%
			display flex
			justify-content space-between
			font-size 18px
			color rgb(191, 203, 217);
			.icon
				transform rotate(90deg)
</style>
