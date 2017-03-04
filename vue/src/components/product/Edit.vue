<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-block">

            <div class="form-group">
              <label>Name:</label>
              <input type="text" class="form-control" v-model="product.name">
            </div>
          
            <div class="form-group">
              <label>Price:</label>
              <input type="number" class="form-control" v-model="product.price">
            </div>
          
            <div class="form-group">
              <label>Description:</label>
              <textarea class="form-control" v-model="product.description"></textarea>
            </div>
            
            <div class="form-group text-right">
              <button class="btn btn-success" v-show="product.name && product.price && product.description" @click="update">Update</button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import swal from 'sweetalert'
  export default {
    created () {
      this.getProduct()  
    },

    data () {
      return {
        product: {}
      }
    },

    methods: {
      getProduct () {
        this.$http.get('api/products/'+this.$route.params.product_id)
          .then(response => {
            this.product = response.body
          })
      },

      update () {
        this.$http.put('api/products/' + this.$route.params.product_id, this.product)
          .then(response => {
            console.log(response)
            swal("Updated!", "Your product has been updated!", "success")
          })
      }
    }
  }
</script>