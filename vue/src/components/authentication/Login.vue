<template>
  <div class="contaier">
    <div class="row">
      <div class="col-6 offset-3">
        <div class="form-group">
          <input type="email"
                  class="form-control"
                  v-model="email"
                  placeholder="Email">
        </div>
        <div class="form-group">
          <input type="password" 
                  class="form-control" 
                  v-model="password" 
                  placeholder="Password">
        </div>
        <button class="btn btn-success ml-auto d-flex">Login</button>
      </div>
    </div>

    <!--Wyświetla zawartosc metody data ()-->
    <!--<pre>
      {{ $data }}
    </pre>-->

  </div>
</template>

<script>
  export default {
    data () {
        return {
          email: "",
          password: ""
        }
    }
  }
</script>