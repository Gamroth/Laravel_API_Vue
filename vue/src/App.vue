<template>
  <div id="app">
    <Navbar></Navbar>
    <Login></Login>
    <Register></Register>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue"
import Login from "./components/authentication/Login.vue"
import Register from "./components/authentication/Register.vue"

export default {
  components: {
    "Navbar": Navbar,
    "Login": Login,
    "Register": Register
  }
}
</script>

<style lang="scss">
  @import "../node_modules/bootstrap/scss/bootstrap.scss";
</style>
