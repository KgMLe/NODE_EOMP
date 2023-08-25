<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
 <div class="container-fluid">
   
   <a class="navbar-brand" href="#" ><img src="https://i.postimg.cc/ht3jSS96/FIT-SPACE-removebg-preview.png" alt="logo"></a>
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
             <li class="nav-item">
               <router-link class="nav-link" to="/admin">Admin</router-link>
             </li>
             <!-- <li class="nav-item">
               <router-link class="nav-link" to="/contact">Contact</router-link>
             </li> -->
     </ul>
     
     <router-link to="/products" class="btn">Shop Now</router-link>

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
    padding-left: 10px;
}

button{
  background-color: var(---color);
  border: 1px solid #0B0B0B;
  padding: 5px;
  width: 50%;
  margin: 3px;
  border-radius: 3px;
}
 button:hover{
  background-color:#0B0B0B;
  color: white;
  box-sizing: 2px 2px 20px black;
}

.btn{
  background-color: #44A1A0;
  color: white;
}

.btn:hover{
  background-color: black;
  color: #44A1A0;
}

</style>