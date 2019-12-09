<template>
  <div class="dashboard">
    <h1>{{title}}</h1>
		<p @click="register">register</p>
		<p @click="login">login</p>
		<p @click="addFriend">addFriend</p>
		<p @click="getFriendsList">getFriendsList</p>
  </div>
</template>

<script>
import { register, login, addFriend, getFriendsList } from '@/api/api'
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
		},
		addFriend() {
			addFriend({
				user_id: 10,
				from_user: 11
			}).then((res) => {
				console.log(res)
			}).catch((err) => {
				console.log(err)
			})
		},
		getFriendsList() {
			getFriendsList({
				user_id: 10
			}).then((res) => {
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
