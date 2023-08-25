<template>
 <div class="container-fluid" style="padding:3% ;">
  <div class="container text-center">
  <div class="row align-items-start">
    <div class="col" id="intro">
      <h3>
          Discover the Future of Home Fitness with Us!
        </h3>
<br>
        <p class="description">
          At Fit Space Solutions, we understand that space shouldn't limit your commitment to a healthier lifestyle. That's why we've meticulously curated a selection of home gym equipment that caters to both expansive and cozy living spaces. Whether you have a spacious dedicated room or a compact corner, we have the perfect solutions to transform your space into a fitness sanctuary.
        </p>
    </div>
    <div class="col">
      <img src="https://i.postimg.cc/mrRK67tt/image.jpg" alt="gym">
    </div>
  </div>
</div>
  <!-- oooooooooooo -->

    <div class="row">
      <center><h3>Our Product Range:</h3></center>
<!-- PRODUCTS CATEGORIES -->
      <div class="row-category">

        <!-- 1st col -->
        <div class="col">
          <div class="image-holder text-justify"  >
            <img src="https://i.postimg.cc/y6cG1mvN/WalkingPad.jpg" alt="category">
          </div>
          <br>
          <h3>
            Cardio
          </h3>
          <p> Elevate your heart rate and enhance endurance with our dynamic range of cardio equipment, designed to invigorate your workouts and boost your fitness journey. </p>
        </div>
        <!-- 2nd col -->
        <div class="col">
          <div class="image-holder  text-justify">
            <img src="https://i.postimg.cc/bvLtW48K/image.jpg" alt="category" >
          </div>
          <br>
          <h3>
            Weights
          </h3>
          <p>Sculpt, strengthen, and define with precision using our premium selection of weights and accessories, tailored to provide a comprehensive and versatile home gym experience.</p>
        </div>
        <!-- 3rd col -->
        <div class="col">
          <div class="image-holder  text-justify">
            <img src="https://i.postimg.cc/PJT4G9RZ/Best-Home-Gym-Equipment-2020.jpg" alt="category" >
          </div>
          <br>
          <h3 >
            Gym Accessories
          </h3>
          <p> From supportive gear that perfects your form, to innovative tools adding an extra challenge, our accessories are the perfect complement to your fitness journey.</p>
        </div>
      </div>
    </div>
    <div class="row" style="padding-top: 3%;">
      <p> <b> We believe that fitness knows no boundaries, and neither should your living space. Explore our range of products that embrace versatility, functionality, and space-conscious designs. With Fit Space, achieving your fitness goals has never been this convenient or accessible. Transform your home, transform your life and start your fitness journey with us today! </b>
      </p> 

   
    </div>
    <div class="button-holder">
      <router-link to="/products"><button>Shop now</button></router-link>
    </div>
   
  </div>
</template>

<script>

</script>

<style>

h3{
  font-weight: bold;
  padding: 3%;
}

#intro{
  align-items: start;
  text-align: justify;
  padding-right: 7%;
}
 
#name{
  font-size: 7rem;
}
.column{
  text-align: center;
}

img[alt= "gym"]{
    width: 40rem;
}

.mt-3{
  font-weight: bold;
}
 
.row-1{
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content:center;
}
/* make the pic radius */
img[alt= "category"]{
  border-radius: 50%;
  width: 20rem;
  border: 3px solid #44A1A0;
}

.image-holder img{
  width: 19rem;
}
 
 .row-category{
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-around;
 
 }
.row-category .col{
  text-align: center;
  /* border: 1px solid black; */
  width: 20rem;
}
button{
  color: #0B0B0B;
  background-color: white;
  border: 1px solid #0B0B0B;
  width: 20%;
  padding:3px 5px;
  border-radius: 20px;
}
button:hover{
  color: white;
  background-color: #0B0B0B;
}
.button-holder{
text-align: center;
}
/* ---------------------------------------------------------------- */
/* ---------------------------------------------------------------- */
/* ---------------------------------------------------------------- */
@media screen and (max-width: 700px) {
  #name{
    font-size: 20px;
  }
  p{
    font-size: 10px;
  }
  
img[alt= "gym"]{
    width: 17rem;
}

img[alt="category"]{
  width: 10rem;
}
.row-1{
  grid-template-columns: auto;
}
.row-category{
  grid-template-columns: auto;
 }
}
</style>