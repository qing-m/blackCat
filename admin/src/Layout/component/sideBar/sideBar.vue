<template>
  <div class="sideBar">
		<div class="side-container" ref="wrapper">
			<Sidebar-item v-for="(route,index) in routes" :key="index" :item='route' :base-path="route.path"></Sidebar-item>
		</div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import SidebarItem from './SidebarItem/SidebarItem'
export default {
	name: 'sideBar',
	data() {
		return {
			list: 100
		}
	},
	mounted() {
		this.initScroll()
		console.log(this.routes)
	},
	methods: {
		initScroll() {
			if (!this.$refs.wrapper) {
				return
			}
			let options = {
				click: true,
				bounce: { bottom: false, top: false }
			}
			this.scroll = new BScroll(this.$refs.wrapper, options)
		}
	},
	computed: {
		routes() {
      return this.$router.options.routes
    }
	},
	components: {
		SidebarItem: SidebarItem
	}
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "~common/stylus/mixin"
@import "~common/stylus/variable"
.sideBar
	.side-container
		width 290px
		height 100%
		box-sizing border-box
		background $color-blue
</style>
