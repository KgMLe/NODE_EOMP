<template>
  <div class="container-fluid">
    <div class="row" id="adminsec">
      <p id="admin">User<br>Administration</p>
    </div>
    <div class="row" style="padding: 3%;">
      <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
 Add User
</button>

<!-- Modal Users -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add User</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
    <form >
  <!-- Profile image  -->
  <div class="mb-3">
  <label for="userImage" class="form-label">Image Url</label>
  <input type="text" class="form-control" id="userImage" v-model="addUser.userProfile">
  </div>
  <!-- first name -->
  <div class="mb-3">
  <label for="firstName" class="form-label">First Name</label>
  <input type="text" class="form-control" id="firstName" v-model="addUser.firstName">
  </div>
  <!-- last name -->
  <div class="mb-3">
    <label for="lastName" class="form-label">Last Name</label>
  <input type="text" class="form-control" id="lastName" v-model="addUser.lastName">
  </div>
  <!-- age -->
  <div class="mb-3">
    <label for="age" class="form-label">Age</label>
  <input type="number" class="form-control" id="age" v-model="addUser.userAge">
  </div>
  <!-- gender -->
  <div class="mb-3">
    <label for="gender" class="form-label">Gender</label>
  <input type="text" class="form-control" id="gender" v-model="addUser.Gender">
  </div>
  <!-- email -->
  <div class="mb-3">
    <label for="eMail" class="form-label">E-mail</label>
  <input type="text" class="form-control" id="eMail" v-model="addUser.emailAdd">
  </div>
  <!-- password -->
  <div class="mb-3">
    <label for="inputPassword5" class="form-label">Password</label>
<input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" v-model="addUser.userPass">
  </div>
 
  <!-- Role -->
  <div class="mb-3">
    <label for="role" class="form-label">Role</label>
  <input type="text" class="form-control" id="role" v-model="addUser.userRole">
  </div>
  </form>
      </div>
      <div class="modal-footer">
        <!-- for adding the user -->
        <button type="button" class="btn btn-primary" @submit.prevent="addUser">Save changes</button>
      </div>
    </div>
  </div>
</div>
<!-- Users Table -->
      <table class="table">
        <thead>
          <tr>
            <th scope="col">userID</th>
            <th scope="col">Profile</th>
            <th scope="col">Firstname</th>
            <th scope="col">Lastname</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
          </tr>
        </thead>
        <tbody v-if="users">
          <tr v-for="user in users" :key="user.userID">
            <th scope="row">{{ user.userID }}</th>
            <td>{{ user.profile }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.userAge }}</td>
            <td>{{ user.gender }}</td>
            <td>{{ user.emailAdd }}</td>
            <td>{{ user.userRole }}</td>
            <td><button class="btn">Edit</button></td>
            <td><button class="btn">Delete</button></td>
          </tr>
        </tbody>
        <div v-else class="justify-content-center">
        <SpinnerComp/>
    </div>
      </table>
    </div>

    <!-- products -->
    <div class="row" id="productsec">
      <p id="admin">Product<br>Administration</p>
    </div>
    <div class="row" style="padding: 3%;">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">prodID</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Amount</th>
            <th scope="col">Quantity</th>
            <th scope="col">Prod Pic</th>
          </tr>
        </thead>
        <tbody v-if="products">
          <tr v-for="product in products" :key="product.prodID">
            <th scope="row">{{ product.prodID }}</th>
            <td>{{ product.prodName }}</td>           
            <td>{{ product.Category }}</td>
            <td>{{ product.amount }}</td>
            <td>{{ product.quantity }}</td>
            <td>{{ product.prodUrl }}</td>
            <td><button class="btn">Edit</button></td>
            <td><button class="btn">Delete</button></td>
          </tr>
        </tbody>
        <div v-else class="row justify-content-center">
        <SpinnerComp/>
    </div>
      </table>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#productModal">
              Add Product
      </button>
      <!-- add product modal -->
      <div class="modal fade" id="productModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add Product</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
    <form >
  <!-- Profile image  -->
  <div class="mb-3">
  <label for="prodImage" class="form-label">Image Url</label>
  <input type="text" class="form-control" id="userImage" v-model="addProd.prodUrl">
  </div>
  <!-- name -->
  <div class="mb-3">
  <label for="prodName" class="form-label">Product Name</label>
  <input type="text" class="form-control" id="prodName" v-model="addProd.prodName">
  </div>
  <!-- category -->
  <div class="mb-3">
    <label for="category" class="form-label">Category</label>
  <input type="text" class="form-control" id="category" v-model="addProd.Category">
  </div>
  <!-- amount -->
  <div class="mb-3">
    <label for="amount" class="form-label">Amount</label>
  <input type="number" class="form-control" id="amount" v-model="addProd.amount">
  </div>
   <!-- Quantity  -->
   <div class="mb-3">
  <label for="quantity" class="form-label">Quantity</label>
  <input type="text" class="form-control" id="quantity" v-model="addProd.quantity">
  </div>
  </form>
      </div>
      <div class="modal-footer">
        <!-- for adding the user -->
        <button type="button" class="btn btn-primary" @submit.prevent="addProd">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
  </div>
</template>

<script>
import SpinnerComp from '@/components/SpinNer.vue'
export default {
  components: {
        SpinnerComp
       },
  computed: {
    users() {
      return this.$store.state.users;
    },
    products(){
    return this.$store.state.products
    },
  },
  mounted() {
    this.$store.dispatch('fetchUsers'),
    this.$store.dispatch('fetchProducts')
    
  },
  
  // products add 
  data() {
    return {
      addProd: {
      prodName: "",
      quantity: "",
      amount: "",
      Category: "",
      prodUrl: ""
      },

      addUser: {
       userID : "",
       firstName: "",
       lastName: "",
       userAge: "",
       Gender: "",
       userRole: "",
       emailAdd: "",
       userPass: "",
       userProfile: ""
      }
   
    };

  },
 
  methods: {
   regUser(){
    this.$store.dispatch('addUser', this.addUser)
   },
   newProd (){
    this.$store.dispatch('addProd', this.addProd)
   }
}


};
 
  
</script>

<style>
#adminsec{
    background-image: url("https://freerangestock.com/sample/120943/a-person-typing-on-modern-laptop-with-cookies.jpg");
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

.btn{
  background-color: #44A1A0;
  color: white;
}

.btn:hover{
  background-color: black;
  color: #44A1A0;
}

</style>