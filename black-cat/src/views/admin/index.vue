<template>
  <div class="admin">
    <div class="sign-container">
      <h1 @click="handleClickSetUserName"> {{ routerName }} </h1>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    routerName() {
      return this.$route.meta.title
    },
    ...mapGetters([
      'token'
    ])
  },
  methods: {
    handleClickSetUserName() {
      this.USER_LGOIN({
        username: '1888888888',
        password: 'a123456'
      }).then(res => {
        console.log(res.data)
        this.$router.push({ path: '/home' })
      })
    },
    ...mapActions([
      'USER_LGOIN'
    ])
  }
}
</script>

<style lang="stylus">

</style>
