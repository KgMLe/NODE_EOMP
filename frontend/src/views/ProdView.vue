<template>
  <div class="container-fluid">
<div class="row" id="prodpage">
<p id="prodintro">SHOP           OUR             PRODUCTS</p>
</div>
      <div class="mt-4 row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4" style= "padding:3%" v-if="products">
        <div v-for="product in products" :key= "product.prodID" class="col">
          <div class="group position-relative">
            <div class="ratio ratio-1x1 w-100 overflow-hidden rounded-md bg-secondary group-hover-opacity-75">
              <img :src="product.prodUrl" :alt="product.imageAlt" class="h-100 w-100 object-cover" />
            </div>
            <div class="mt-4 d-flex justify-content-between">
              <div>
                <h4 class="text-sm text-dark">
                  <!-- this should give us the option to view ore details -->
                  <a :href="product.href">
                    <span aria-hidden="true" class="position-absolute inset-0"></span>
                    {{ product.prodName }}
                  </a>
                </h4>
                <p class="mt-1 text-sm text-muted">{{ product.Category}}</p>
              </div>
              <p class="text-sm font-weight-medium text-dark">R:{{ product.amount }}</p>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="row justify-content-center">
        <SpinnerComp/>
    </div>
    <div>
      <SingleProd/>
    </div>
    </div>
</template>

<script>
import SpinnerComp from '@/components/SpinNer.vue'
import SingleProd from './SingleProd.vue'
export default {
       components:{
        SpinnerComp,
        SingleProd
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
  color: black;
}

</style>