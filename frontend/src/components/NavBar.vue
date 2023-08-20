<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
 <div class="container-fluid">
   
   <a class="navbar-brand" href="#" ><img src="https://i.pinimg.com/originals/e9/e2/78/e9e2787d0cb55d570fe1c76843506759.jpg" alt="logo"></a>
   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
   </button>
   <div class="collapse navbar-collapse" id="navbarSupportedContent">
     <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       <li class="nav-item">
             <router-link class="nav-link" to="/">Home</router-link>
             </li>
             <li class="nav-item">
               <router-link class="nav-link" to="/about">About</router-link>
             </li>
             <li class="nav-item">
               <router-link class="nav-link" to="/products">Products</router-link>
             </li>
             <!-- <li class="nav-item">
               <router-link class="nav-link" to="/users">Users</router-link>
             </li>
             <li class="nav-item">
               <router-link class="nav-link" to="/contact">Contact</router-link>
             </li> -->
     </ul>
   </div>
 </div>
</nav>
</template>

<script>
   export default {
       
   }
</script>

<style  scoped>

img[alt= "logo"]{
    width: 4rem;
}


</style>