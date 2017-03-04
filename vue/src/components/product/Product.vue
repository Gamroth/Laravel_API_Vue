<template>
  <div class="col-md-4">
    <div class="card">
      <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a64fa624552369.5633627b8e849.jpg" alt="Thumbnail" class="card-img-top">
      <div class="card-block">
        <h6 class="card-title">
          {{ productdata.name }} 
        </h6>
        <p class="card-text"><small class="text-muted">
          {{ productdata.price }}
        </small></p>
        <p class="card-text d-flex flex-row justify-content-between">
          <a href="#" class="btn btn-primary">Wish list</a>
          <a href="#" class="btn btn-success">Buy</a>
        </p>
        <p class="card-text d-flex flex-row justify-content-end" v-if="productdata.user_id == authenticatedUser.id">
          <a href="#" class="btn btn-danger" role="button" @click="deleteProduct">Delete</a>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .card {
    margin-top: 15px;
    margin-bottom: 15px;
  }
  img {
    width: 100%;
    height: auto;
  }
</style>

<script>
  import swal from 'sweetalert'

  export default {
    props: ['productdata', 'authenticatedUser'],

    methods: {
      deleteProduct () {
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
            this.$http.delete('api/products/' + this.productdata.id)
              .then(response => {
                console.log(response)

                 swal("Deleted!", "Your product has been deleted.", "success");
              })
          }.bind(this)
        );
      }
    }

  }
  
</script>