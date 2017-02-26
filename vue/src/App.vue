<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  components: {
    'Navbar': Navbar
  }
}
</script>

<style lang="scss">
  @import "../node_modules/bootstrap/scss/bootstrap.scss";
</style>
