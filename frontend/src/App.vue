<template>
  <div>
      <NavBar/> <!--shows our navbar -->
  
      <main>
        <router-view/> <!--this shows our content-->
      </main>
     <FooTer/>
    </div>
  
  </template>
  
  
  <script>
  import NavBar from '@/components/NavBar.vue'
  import FooTer from '@/components/FooTer.vue'
  export default {
    components:{
      NavBar,
      FooTer
    }
  }
  </script>
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: rgb(249, 249, 249);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto minmax(10vh, 1fr) auto;
  }

  #app > *{
    grid-column: 1/-1;
}
  
  nav {
    padding: 30px;
  }
  
  nav a {
    font-weight: bold;
    color: #2c3e50;
  }
  
  nav a.router-link-exact-active {
  font-weight: bolder;
  font-size: 1.1rem;
  }
  </style>