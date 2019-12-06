<template>
  <div class="dashboard">
    <h1>name: {{name}}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'dashboard'
    }
  }
}

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "~common/stylus/mixin"
@import "~common/stylus/variable"
</style>
