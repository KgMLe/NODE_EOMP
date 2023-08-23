<template>
  <div>
    <div id="landingpage" class="row">
      <!-- LANDING PAGE IMAGE  -->
      <div class="blockquote-wrapper">
  <div class="blockquote">
    <h1>
      Got body goals? <br> We got you
     </h1>
  </div>
</div>
    <button> Large button</button>
  </div>
  <div class="container">
    <div class="row">
      <h5 id="welcome">
      Welcome to Fit Space Solutions, a premier home gym equipment site, where fitness meets convenience. Explore a wide range of meticulously curated exercise gear designed to transform any space into a personal fitness haven. From compact cardio machines to versatile weights and cutting-edge accessories, we offer everything you need to elevate your workouts and achieve your health goals without leaving the comfort of your home. Browse now and embark on a journey to a fitter, healthier you.
     </h5>
    </div>
  </div>
  <div>
    
  </div>
  </div>
  
  
  
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
#landingpage{
background-image: url("https://i.postimg.cc/k4TKqw6x/106446251-1584376411229twenty20-bb5f869c-3773-4e13-bfbb-18416f5b58bf.jpg");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
}

#welcome{
  font-weight: bold;
  padding: 7%;
  text-align: center;
}

img[alt= "category"]{
    border-radius: 50%;
}

/* Blockquote main style */
.blockquote {
    position: relative;
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    color: #44A1A0;
    padding: 7%;
    width: 100%;
    max-width: 500px;
    z-index: 1;
    margin: 80px auto;
    align-self: center;
    border-top: solid 3px;
    border-bottom: solid 3px;
}

/* Blockquote header */
.blockquote h1 {
    
    color: black;
    font-size: 40px;
    font-weight: 800;
    line-height: 1;
    margin: 0;
}


/* increase header size after 600px */
@media all and (min-width: 600px) {
    .blockquote h1 {
        font-size: 60px;
   }

}

</style>