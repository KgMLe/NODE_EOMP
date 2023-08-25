<template>
<div class="container-fluid">
  <div class="card" style="width: 18rem;">
  <img :src="$route.query.prodURL" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{ $route.query.prodName}}</h5>
    <h5 class="card-title">{{ $route.query.catergory}}</h5>
    <p class="card-text">{{ $route.query.amount }}</p>
  </div>
</div>
</div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>