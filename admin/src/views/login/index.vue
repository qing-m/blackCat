<template>
  <div class="login">
		<div class="login-wrapper">
			<div class="wrapper-title">
				<p>{{title}}</p>
			</div>
			<ul class="wrapper-content">
				<li>
					<p>用户名</p>
					<input type="text" v-model="user" maxlength='11'>
				</li>
				<li>
					<p>密码</p>
					<input type="password" v-model="password" maxlength="10">
				</li>
				<li>
					<button @click="loginBtn">登录</button>
				</li>
			</ul>
		</div>
  </div>
</template>

<script>
import { setCustInfo } from 'common/js/utils'
import { login } from 'api/api'
import { mapMutations } from 'vuex'
export default {
	data() {
		return {
			title: 'Login Form',
			user: '18888888888',
			password: 'a123456'
		}
	},
	mounted() {
		console.log()
	},
	methods: {
		loginBtn() {
			console.log('login')
			login({
				user: this.user,
				password: this.password
			}).then((res) => {
				const custObj = {
					token: res.data.token,
					userInfo: res.data.userInfo
				}
				console.log(res)
				setCustInfo(custObj)
				this.SAVE_CUST(custObj)
				this.$router.push({ name: '/' })
			}).catch((err) => {
				console.log(err)
			})
		},
		...mapMutations(['SAVE_CUST'])
	}
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "~common/stylus/mixin"
@import "~common/stylus/variable"
.login
	position fixed
	width 100%
	height 100%
	background #2d3a4b
	.login-wrapper
		position absolute
		top 20%
		left 0
		right 0
		margin 0 auto
		width 520px
		.wrapper-title
			width 100%
			> p
				text-align center
				font-size 48px
				color #eee
				margin 0px auto 40px auto
				text-align center
				font-weight bold
				font-family 'PingFangSC-Semibold,PingFang SC'
		.wrapper-content
			width 100%
			> li
				width 100%
				background #304156
				display flex
				align-items center
				margin-bottom 35px
				> input
					background transparent
					outline none
					font-size 30px
					color #f4f4f5
					height 100%
					font-family 'PingFangSC-Semibold,PingFang SC'
				> p
					width 120px
					font-size 30px
					color #889aa4
					font-family 'PingFangSC-Semibold,PingFang SC'
					text-align-last justify
					margin-right 15px
					padding 30px 20px
				> button
					width 100%
					height 100%
					background #409EFF
					border none
					color #f4f4f5
					font-size 30px
					padding 30px 20px
					font-family 'PingFangSC-Semibold,PingFang SC'
		// .login-from
		// 	width 520px
		// 	> button
		// 		background transparent
		// 		border-radius 8px
		// 		font-size 32px
		// 		font-family 'PingFangSC-Regular,PingFang SC'
		// 		font-weight 400
		// 		color rgba(255,255,255,1)
		// 		line-height 45px
		// 		border none
		// 	> li
		// 		width 100%
		// 		height 105px
		// 		margin-bottom 30px
		// 		display flex
		// 		align-content center
		// 		> div
		// 			width 100%
		// 			// display flex
		// 			// align-items center
		// 			// justify-content space-between
		// 			> div
		// 				width 120px
		// 				font-size 30px
		// 				font-family 'PingFangSC-Regular,PingFang SC'
		// 				font-weight 400
		// 				color rgba(102,102,102,1)
		// 				line-height 42px
		// 				text-align-last justify
		// 			> input
		// 				font-size 30px
		// 				display block
		// 				padding 10px 20px
		// 				outline none
		// 				border 1px solid #ccc
		// 				caret-color #454545
		// 				transition all 300ms
		// 				background transparent
		// 			> input::-webkit-input-placeholder
		// 				color #C0C0C0
		// 			> input:valid
		// 				border 2px solid $color-black
		// 				box-shadow inset 5px 0 0 $color-black
		// 			> input:invalid
		// 				border 2px solid $color-regular-blue
		// 				box-shadow inset 5px 0 0 $color-regular-blue
</style>
