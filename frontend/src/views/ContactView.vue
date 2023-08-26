<template>
      
    <div class="container-fluid" style="padding-top: 7%%;"  id="contactus">
        <br>
        <br>
        <br> 
  <form action="https://formspree.io/f/mjvqvkoe"
  method="POST">
    <div class="row" style="padding: 3%;">
    <div class="col-sm-6" id="contactme" >
        <span>
          Exercise not only changes your body, it changes your mind attitude and mood
        </span>
        <br>
        <p>How can we help?</p>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>    
    </div>
    <div class="col-sm-6">
    <div class="mb-3">
    <input type="text" class="form-control" placeholder="Name and Surname" aria-label="name" name="nameandsurname" required oninvalid="this.setCustomValidity('Please Enter Your Name')"
            oninput="this.setCustomValidity('')">
  </div>
  <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"></label>
  <input type="email" class="form-control" id="exampleFormControlInput1"  placeholder="Enter email address" name="email" required oninvalid="this.setCustomValidity('Please Enter Email')"
            oninput="this.setCustomValidity('')">
  </div>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label"></label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Leave a message" name="message" required oninvalid="this.setCustomValidity('Please Enter Message')"
            oninput="this.setCustomValidity('')"></textarea>
  </div>
  <button class="btn">Submit</button>
    </div>
  </div>
  
  </form>
    </div>
  </template>
  
  <script>
    export default {
        
    }
  </script>
  
  <style scoped>
  #contactus{
    background-image: url("https://img.freepik.com/premium-vector/father-mom-daughter-yoga-stretching-sport-activity-with-children-morning-exercises-home-happy-family-doing-fitness-cozy-interior_458444-1223.jpg?w=2000");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  }
  
  span{
    font-size: 3rem;
    justify-content: end;
  }
  
  input, textarea{
    background-color: transparent !important;
    display: block;
    border-width: 0 0 2px 0;
    border-color: black;
  
  }
  
  .btn{
    width: 50%;
    border-radius: 1rem;
    padding: 1.5%;
    color: #fff;
    background-color: black;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
  background-color: black;
  color: #44A1A0;
  }

  @media(max-width: 768px) {
  

  span{
  font-size: 1.5rem;
  padding-top: 7%;
}
}
  
  @media(max-width: 567px) {
  
    #contactme{
        padding: 30px;
        margin: 20px;
    } 
  
    span{
    font-size: 1.5rem;
    justify-content: end;
  }
  
  
  
  }
  
  </style>