<template>
  <div class="container">
    <div class="header clearfix">
      <nav>
        <ul class="nav nav-pills float-right">
          <li class="nav-item">
            <a class="nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <h3 class="text-muted">Project name</h3>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss">
  body {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
  
  .header {
    padding-right: 1rem;
    padding-left: 1rem;
  }
  
  .header {
    padding-bottom: 1rem;
    border-bottom: .05rem solid #e5e5e5;
  }
  
  .header h3 {
    margin-top: 0;
    margin-bottom: 0;
    line-height: 3rem;
  }
  
  @media screen and (min-width: 48em) {
    .header {
      padding-right: 0;
      padding-left: 0;
      margin-bottom: 2rem;
    }
  }
</style>