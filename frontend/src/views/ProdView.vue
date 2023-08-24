<template>
  <div class="container-fluid">


 <div class="products" v-if="products">
    <div class="card" v-for="product in products" :key= "product.prodID">
      <div class="image-holder">
          <img :src="product.prodUrl" :alt="product.imageAlt">
      </div>
      <div class="info">
        <div class="container text-center">
  <div class="row align-items-start">
    <!-- <div class="col"> -->
      <strong>{{ product.prodName }}</strong>
      <br>
      <span class="price">${{ product.amount }}</span>
      <br>
      <div class="button-contain">
          <button>
            view
          </button>
        </div>
    <!-- </div> -->
    <!-- <div class="col"> -->
     
    <!-- </div> -->
  </div>
</div>
 
 
 
        
      </div>
</div>
 </div>
</div>
</template>
<!-- 




 -->
<!-- <div v-else class="row justify-content-center">
  <SpinnerComp/>
</div> -->
<script>
// import SpinnerComp from '@/components/SpinNer.vue'

export default {
       components:{
        // SpinnerComp,
       },
       computed:{
        products(){
            return this.$store.state.products
        }
       },
       mounted(){
        this.$store.dispatch('fetchProducts')
       } 
       }
</script>

<style scoped>
:root{
  ---color: #0B0B0B;
}

#prodpage{
background-image: url("https://i.postimg.cc/MTHNk2k4/best-home-workout-equipment.jpg");
background-position: center;
background-repeat: no-repeat;
background-size: cover;

}

#prodintro{
  text-align: center;
  padding: 3%;
  font-size: 3rem;
  font-weight: bold;
  color: var(---color);
}
.products{
  display:grid;
  grid-template-columns: auto auto auto;
  justify-content: space-around;

}

.card{
  width: 18rem;
  margin: 5px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0);
}

.image-holder {
  text-align: center;
}
.image-holder img{
  width: 250px;
    height: 250px;
    object-fit: contain;
    aspect-ratio: 3/4;
}

.price{
  font-size: 14px;
  font-weight: 800;
  float: right;
  color: var(---color);
  margin: 10px;
}

.button-contain{
text-align: left;
bottom: 0;
}

.button-contain button{
  background-color: var(---color);
  border: 1px solid #0B0B0B;
  padding: 5px;
  width: 50%;
  margin: 3px;
}
 .button-contain button:hover{
  background-color:#0B0B0B;
  color: white;
  box-sizing: 2px 2px 20px black;
}

strong{
  font-size: 15px;
}

.bottom{
  position: relative;
  bottom: 0;
}
.row{
  text-align: left;
}


@media screen and (max-width: 700px) {
  .products {
    grid-template-columns: auto;
  }
}

@media screen and (max-width: 300px) {
  .products {
    grid-template-columns: auto;
  }
 
}
</style>