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
        <button class="btn" type="submit">Search</button>  
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
            <li><button class="dropdown-item" type="button" >A-Z</button></li>
          <li><button class="dropdown-item" type="button" >Price</button></li>
          
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
            <li><button class="dropdown-item" type="button" @click="selectedCategory = 'Cardio'">Cardio</button></li>
          <li><button class="dropdown-item" type="button" @click="selectedCategory = 'Weights'">Weights</button></li>
          <li><button class="dropdown-item" type="button" @click="selectedCategory = 'Accessories'">Accessories</button></li>
          </ul>
     </div>
    </div>
   
  </div>
</div>

<div class="row" style="padding: 3%;">

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
      <span class="price">${{ product.amount }}</span>
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
        <button>
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
        // search
        filteredProducts() {
      if (this.searchQuery === '') {
        return this.products;
      }

      return this.products.filter((product) => {
        return (
          product.prodName.includes(this.searchQuery) ||
          product.amount.includes(this.searchQuery) ||
          product.category.includes(this.searchQuery)


        );
      });
    },

    
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

.bottom{
  position: relative;
  bottom: 0;
}
.row{
  text-align: left;
}

.row{
  margin: 10px;
}
@media screen and (max-width: 700px) {
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