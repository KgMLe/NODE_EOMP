<template>
    <div class="container-fluid">   
     <div class="row" id="adminsec">
       <p id="admin">
        User <br> Administration
       </p>
     </div>  
     <div class="row">
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
     </div>
     <div class="row" id="productsec">
        <p id="admin">
            Product <br> Administration
        </p>
     </div>  
    </div>
</template>
  
  <script>
  export default {
   
  }
  </script>

  <style>
#adminsec{
    background-image: url("https://i.postimg.cc/Xv4TxfyJ/business-man-looking-data-chart-stock-market-analysis-company-growth-laptop-entrepreneur-looking-glo.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

#admin{
    font-size: 5rem;
    font-weight: bold;
    color: white;
    text-align: center;
    padding: 3%;
}

#productsec{
    background-image: url("https://i.postimg.cc/GmzPxRmS/Fit-Gifts-Promotional-Products-for-Gyms-1.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

</style>
  