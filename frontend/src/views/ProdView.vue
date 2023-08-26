<template>
  <div class="container-fluid">
<div class="row" id="prodpage">
<div id="prodintro">
  <h1>SHOP OUR PRODUCTS</h1>
</div>
</div>
<div class="container text-center " style="padding-top: 3%;">
  <div class="row text-center">
    <div class="col">
        <!-- search -->
        <form class="d-flex" role="search" @submit.prevent="search">
        <input class="form-control me-2" type="search" placeholder="Search Product" aria-label="Search" v-model="searchQuery">
        <button class="btn" type="submit" @click="searchProducts">Search</button>  
        </form>
    </div>
  </div>
  <div class="row text-center">
    <div class="col">
      <!-- sort by name and prize -->
      <div class="btn-group">
          <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false" >
            Sort By:
          </button>
          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
            <li><button class="dropdown-item" type="button" @click="sortName">A-Z</button></li>
          <li ><button class="dropdown-item" type="button"  @click="sortAmount">Price (Low To High)</button></li>
      
          </ul>
     </div>
    </div>
    <div class="col">
      <!-- view by category -->
    <div class="btn-group">
          <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false" >
            View By Category:
          </button>
          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
            <li><button class="dropdown-item" type="button" @click="selectedCardio = 'Cardio'">Cardio</button></li>
          <li><button class="dropdown-item" type="button" @click="selectedWeights = 'Weights'">Weights</button></li>
          <li><button class="dropdown-item" type="button" @click="selectedAccessories = 'Accessories'">Accessories</button></li>
          </ul>
     </div>
    </div>
   
  </div>
</div>

<div class="row" id="display" style="padding: 3%;">

</div>
<div>
  
</div>
 
 


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
      <span class="price">R{{ product.amount }}</span>
      <br>
        <div class="button-contain">
          <router-link :to="{ name: 'singleProd', params: { id: product.prodID }, query: {
              prodName: product.prodName,
              Category: product.Category,
              quantity: product.quantity,
              prodURL: product.prodUrl,
              amount: product.amount,
            }}"
        >
        <button class="btn">
            View Details
          </button>
        </router-link>
        </div>
  </div>
</div>
 </div>
</div>
 </div>
 <div v-else class="row justify-content-center">
  <SpinnerComp/>
</div>
</div>
</template>
<script>
import SpinnerComp from '@/components/SpinNer.vue'

export default {
       components:{
        SpinnerComp,
       },
      computed:{
        products(){
            return this.$store.state.products
        },   
        selectedCardio(){
      return this.$store.state.products.find(products => products.Category ==='cardio');
    }  
       },
       data() {
        
       return {
      searchQuery: '',
    
    };
  }, 
       methods:{
        
  // search
  searchProducts() {
  console.log('its clicked')
  return this.$store.state.products.filter((product) => {
  return product.prodName.includes(this.searchQuery);
});
 
}

,
    // sort amount
    sortAmount() {
      return this.$store.state.products.sort(
    (p2, p1) => (p2.amount < p1.amount) ? -1 : (p2.amount > p1.amount) ? 1 : 0);
     
      },
    // sort by name 
    sortName() {
      return this.$store.state.products.sort(
    (p2, p1) => (p2.prodName < p1.prodName) ? -1 : (p2.prodName > p1.prodName) ? 1 : 0);
   
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
/* height: 60vh; */
}

#prodintro{
  text-align: center;
  padding: 3%;
  font-size: 3rem;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 20px black;
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


.btn{
  border: 1px solid #44A1A0;
  background-color: #44A1A0;
  color: white;
}

.btn:hover{
  background-color: black;
  color: #44A1A0;
}

strong{
  font-size: 15px;
}

.row{
  text-align: left;
}

.row{
  margin: 10px;
}
@media screen and (max-width: 768px) {
  .products {
    grid-template-columns: auto;
  }
  .btn-group > button{
font-size: 10px;
  }
}

@media screen and (max-width: 300px) {
  .products {
    grid-template-columns: auto;
  }
  #prodintro h1{
    font-size: 20px;
  }
  .btn{
    margin: 10px;
  }
}
</style>