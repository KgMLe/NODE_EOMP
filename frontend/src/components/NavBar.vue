<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
 <div class="container-fluid">
   
   <router-link class="navbar-brand" to="/" ><img src="https://i.postimg.cc/ht3jSS96/FIT-SPACE-removebg-preview.png" alt="logo"></router-link>
   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-view-stacked" viewBox="0 0 16 16">
  <path d="M3 0h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3zm0 8h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H3z"/>
</svg></span>
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
             <li class="nav-item">
               <router-link class="nav-link" to="/contact">Contact</router-link>
             </li>
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

@media screen and (max-width: 700px) { 
 a{
  font-size: 10px;
 }
.navbar-toggler{
  width: 10%;
}
}

</style>