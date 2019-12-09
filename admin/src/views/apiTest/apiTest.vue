<template>
  <div class="dashboard">
    <h1>{{title}}</h1>
		<p @click="register">register</p>
		<p @click="login">login</p>
  </div>
</template>

<script>
import { register, login } from '@/api/api'
export default {
  data() {
    return {
      title: 'api test'
    }
	},
	methods: {
		register() {
			register({
				tel: '80922158',
				password: 'a123456'
			}).then((res) => {
				console.log(res)
			}).catch((err) => {
				console.log(err)
			})
		},
		login() {
			login({
				tel: '809221582',
				password: 'a123456'
			}).then((res) => {
				sessionStorage.setItem('token', res.token)
				console.log(res)
			}).catch((err) => {
				console.log(err)
			})
		}
	}
}

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "~common/stylus/mixin"
@import "~common/stylus/variable"
</style>
