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
              <button class="btn btn-success" v-show="product.name && product.price && product.description" @click="create">Create</button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        product: {
          name: '',
          price: 0,
          description: ''
        }
      }
    },

    methods: {
      create () {
        this.$http.post('api/products', this.product)
          .then(response => {
            this.$router.push('/feed')
          })
      }
    }
  }
</script>