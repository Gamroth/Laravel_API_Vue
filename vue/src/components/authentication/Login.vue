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
        <button class="btn btn-success ml-auto d-flex" v-on:click="login">Login</button>
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
    },

    methods: {
        login () {
          var data = {
            client_id: 2,
            client_secret: 'u2YF7RcS0jRh0vJsXZ4zR8q6kRTrfhdvpktwbuHr',
            grant_type: 'password',
            username: this.email,
            password: this.password
          }

          this.$http.post("oauth/token", data)
            .then(response => {
              this.$auth.setToken(
                response.body.access_token, 
                response.body.expires_in + Date.now()
              )

              this.$router.push('/feed')
            })

            // stary sposob
            // .then(function(response) {
            //   console.log(response);
            // })
        }
    }
  }
</script>