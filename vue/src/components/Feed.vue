<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h2>Test</h2>
      </div>
      <my-products></my-products>
    </div>
  </div>
</template>

<script>
  import Products from './product/Products.vue'

    export default {
      components: {
        'my-products': Products
      }
    }

</script>