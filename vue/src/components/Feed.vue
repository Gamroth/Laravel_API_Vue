<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h2>Test</h2>
      </div>
      <div class="col-md-12">
        <ul>
          <li v-for="product in products">{{product.name}} - {{ product.price }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        products: []
      }
    },
    created () {
      this.$http.get('api/products')
        .then(response => {
          this.products = response.body
        })
    }
  }
</script>