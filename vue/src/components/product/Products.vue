
<template>
  <div class="col-md-12">
    <div class="row">
      <my-product 
        v-for="product in products"
        @delete-product="deleteProduct(product)"
        :authenticatedUser="authenticatedUser"
        :productdata="product">
      
      </my-product>
    </div>
  </div>
</template>


<script>
  import swal from 'sweetalert'

  import Product from './Product.vue'

  export default {
    data () {
      return {
        products: []
      }
    },

    computed: {
      authenticatedUser () {
        return this.$auth.getAuthenticatedUser()
      }
    },

    components: {
      'my-product': Product
    },

    created () {
      this.$http.get('api/products')
        .then(response => {
          this.products = response.body
        })
    }, 

     methods: {
      deleteProduct (product) {
        swal({
            title: "Are you sure?",
            text: "You will not be able to recover this product!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            closeOnConfirm: false
          },
          function () {
            this.$http.delete('api/products/' + product.id)
              .then(response => {
                let index = this.products.indexOf(product)

                this.products.splice(index, 1)

                swal("Deleted!", "Your product has been deleted.", "success");
              })
          }.bind(this)
        );
      }
    }
  }
</script>