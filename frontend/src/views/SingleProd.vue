<template>
<div class="container ">
  <div class="row align-items-start">
    <div class="col-7 text-center">
      <img :src="$route.query.prodURL" class="card-img-top" alt="...">
    </div>
   
    <div class="col text-left">
        <h5 class="card-text"><span class="bold">Name:</span> {{ $route.query.prodName }}</h5>
        <h5 class="card-text"><span class="bold">Avail Stock:</span> {{ $route.query.quantity }}</h5>
        <h5 class="card-text"><span class="bold">Category:</span> {{ $route.query.Category }}</h5>
        <h5 class="card-text"><span class="bold">Price: </span>{{ $route.query.amount }}</h5>
        <button v-on:click="cart"><i class="bi bi-cart-plus"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    cart() {
      alert('🎊🎊Item added to wishlist 😀👍');
    }
  }
};
 </script>

<style scoped>
.col{
  margin-top: 10%;
  /* margin-left: 10%; */
}
 i{
  padding: 10px;
  width: 30%;
  color: white;
  font-size: 20px;
  font-weight: 900;
 
 }
 button{
  background-color: #44A1A0;
  border:1px solid #44A1A0;
  border-radius: 6px;

 }
 button:hover{
  background-color: black;
  border:1px solid black;
 }
.bold{
  font-weight: 900;
  color:#44A1A0;
}
.container{
  margin: 10px;
}
.col-7 img{
  margin-top: 10%;
  width: 300px;

}
</style>