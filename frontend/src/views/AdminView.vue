<template>
  <div class="container-fluid" >
  
    <div class="row" style="padding: 3%;">
      <center><h1>Users</h1></center>
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
  <form @submit.prevent="newUser">
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
        <button type="submit" class="btn btn-primary" @click="registerUser(addUser)" >Save changes</button>
      </div>
    </div>
  </div>
</div>
<!-- user cards -->
<div class="card-container" v-if="users">
  <div class="card" v-for="user in users" :key="user.userID">
    <p><span class="id">{{ user.userID }}</span></p>
    <div class="profile-">
      <img :src="user.userProfile">
    </div>
  <div class="card-body">
    <h5 class="card-title">{{ user.firstName }} <br>{{ user.lastName }}</h5>
    <p>{{ user.userAge }}</p>
    <p>{{ user.Gender }}</p>
    <p>{{ user.emailAdd }}</p>
    <p>{{ user.userRole }}</p>
    <div class="row">
      <div class="col">
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#editmodal">Edit<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
</svg></button>
      </div>
      <!-- edit modal -->
      <div class="modal fade" id="editmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add User</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <!-- edit user -->
  <form @submit.prevent="updatedUser" >
  <div class="mb-3">
  <label for="userImage" class="form-label">User ID</label>
  <input type="text" class="form-control" id="userImage" v-model="editUser.userID">
  </div> 
  <!-- Profile image  -->
  <div class="mb-3">
  <label for="userImage" class="form-label">Image Url</label>
  <input type="text" class="form-control" id="userImage" v-model="updateUser.userProfile">
  </div>
  <!-- first name -->
  <div class="mb-3">
  <label for="firstName" class="form-label">First Name</label>
  <input type="text" class="form-control" id="firstName" v-model="editUser.firstName">
  </div>
  <!-- last name -->
  <div class="mb-3">
    <label for="lastName" class="form-label">Last Name</label>
  <input type="text" class="form-control" id="lastName" v-model="editUser.lastName">
  </div>
  <!-- age -->
  <div class="mb-3">
    <label for="age" class="form-label">Age</label>
  <input type="number" class="form-control" id="age" v-model="editUser.userAge">
  </div>
  <!-- gender -->
  <div class="mb-3">
    <label for="gender" class="form-label">Gender</label>
  <input type="text" class="form-control" id="gender" v-model="editUser.Gender">
  </div>
  <!-- email -->
  <div class="mb-3">
    <label for="eMail" class="form-label">E-mail</label>
  <input type="text" class="form-control" id="eMail" v-model="editUser.emailAdd">
  </div>
  <!-- password -->
  <div class="mb-3">
    <label for="inputPassword5" class="form-label">Password</label>
<input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" v-model="editUser.userPass">
  </div>
  <!-- Role -->
  <div class="mb-3">
    <label for="role" class="form-label">Role</label>
  <input type="text" class="form-control" id="role" v-model="editUser.userRole">
  </div>
  </form>
      </div>
      <div class="modal-footer">
        <!-- for editing the user -->
        <button type="submit" class="btn btn-primary" @click="updateUser(userID)">Save changes</button>
      </div>
    </div>
  </div>
</div>
<!-- delete user -->
      <div class="col">
        <button class="btn"   @click="delUser(user.userID)">Del<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-dash-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11 7.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"/>
  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg></button>
      </div>
    </div>
  </div>
</div>
</div>
<div v-else class="justify-content-center">
        <SpinnerComp/>
</div>
    </div>

    <!-- products -->
  <center><h1>Products</h1></center>
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
            <th scope="col">Edit</th>
            <th scope="col">Del</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody v-if="products">
          <tr v-for="product in products" :key="product.prodID">
            <th>{{ product.prodID }}</th>
            <td>{{ product.prodName }}</td>           
            <td>{{ product.Category }}</td>
            <td>{{ product.amount }}</td>
            <td>{{ product.quantity }}</td>
            <td><img :src="product.prodUrl" :alt="product.imageAlt"></td>
            <td><button class="btn" data-bs-toggle="modal" data-bs-target="#editProd"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
              <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
            </svg></button></td>
            <div class="modal fade" id="editProd" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Product</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <!-- EDIT PRODUCT -->
      <div class="modal-body">
    <form @submit.prevent="updatedProd" :key="product.prodID">
      <div class="mb-3">
  <label for="prodImage" class="form-label">Product ID</label>
  <input type="text" class="form-control" id="prodID" v-model="editProd.prodID">
  </div>    
  <!-- Profile image  -->
  <div class="mb-3">
  <label for="prodImage" class="form-label">Image Url</label>
  <input type="text" class="form-control" id="userImage" v-model="editProd.prodUrl">
  </div>
  <!-- name -->
  <div class="mb-3">
  <label for="prodName" class="form-label">Product Name</label>
  <input type="text" class="form-control" id="prodName" v-model="editProd.prodName">
  </div>
  <!-- category -->
  <div class="mb-3">
    <label for="category" class="form-label">Category</label>
  <input type="text" class="form-control" id="category" v-model="editProd.Category">
  </div>
  <!-- amount -->
  <div class="mb-3">
    <label for="amount" class="form-label">Amount</label>
  <input type="number" class="form-control" id="amount" v-model="editProd.amount">
  </div>
   <!-- Quantity  -->
   <div class="mb-3">
  <label for="quantity" class="form-label">Quantity</label>
  <input type="text" class="form-control" id="quantity" v-model="editProd.quantity">
  </div>
  </form>
      </div>
      <div class="modal-footer">
        <!-- for update the product -->
        <button type="submit" class="btn btn-primary" @click="updateProd(editProd)">Save changes</button>
      </div>
    </div>
  </div>
</div>
           <td><button class="btn" @click="delProd(product.prodID)">Delete</button></td>
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
    <form @submit.prevent="newProd">
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
        <!-- for adding the product -->
        <button type="submit" class="btn btn-primary" @click="addProduct(addProd)">Save changes</button>
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
   data() {
    return {
      addProd: {
      prodName: "",
      quantity: "",
      amount: "",
      Category: "",
      prodUrl: ""
      },
      
      addUser:{
       userID : "",
       firstName: "",
       lastName: "",
       userAge: "",
       Gender: "",
       userRole: "",
       emailAdd: "",
       userPass: "",
       userProfile: ""
      },
      editProd :{
      prodID: "",
      prodName: "",
      quantity: "",
      amount: "",
      Category: "",
      prodUrl: ""
      },
      editUser:{
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
  computed: {
    users() {
      return this.$store.state.users;
    },
    products(){
    return this.$store.state.products
    },
   newProd (){
   return this.$store.dispatch('registerProduct', this.addProd)
   },
   newUser(){
    return this.$store.dispatch('register', this.addUser)
   },
   updatedProd(){
    return this.$store.dispatch ('updateProduct', this.editProd)
   },
   updatedUser(){
    return this.$store.dispatch ('updateUser', this.editUser)
   }
  },
  mounted() {
    this.$store.dispatch('fetchUsers'),
    this.$store.dispatch('fetchProducts')
    
  },
  
 
  methods: { 
  //  delete
   async delProd(prodID) {
    try {
      await this.$store.dispatch("deleteProduct", prodID);
      alert("Product Deleted")
    } catch (error) {
      this.errorMsg = "An error occurred."
    }
  },
  async delUser(userID) {
    try {
      await this.$store.dispatch("deleteUser", userID);
      alert("User Deleted")
    } catch (error) {
      this.errorMsg = "An error occurred "
    }
  },
  // add
  async addProduct() {
    try {
      await this.$store.dispatch("registerProduct",this.addProd);
      alert("Product Added")
    } catch (error) {
      this.errorMsg = "An error occurred."
    }
  },
  async registerUser() {
    try {
      await this.$store.dispatch("register",this.addUser);
      alert("User Added")
    } catch (error) {
      this.errorMsg = "An error occurred."
    }
  },
  // update
  async updateUser(userID) {
    console.log("clicked");
    try {
      await this.$store.dispatch('updateUser', userID);
      alert("User Updated")
    } catch (error) {
      this.errorMsg = "An error occurred while updating the user."
    }
  },
  async updateProd(prodID) {
    console.log("clicked");
      try {
        const response = await this.$store.dispatch('updateProduct', prodID);
        
        if (response.msg) {
          alert("Oops something seems wrong")
        } else {
          alert("Prodcut Updated")
        }
      } catch (error) {
        this.errorMsg = "An error occurred while updating the user."
      }
    },
  },
};
 
  
</script>

<style>
.id{
  color: #44A1A0;
  font-weight: 800;
}
 .card-container{
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-content: space-around;
 }
 .card-container .card{
text-align: center;
width: 200px;
font-size: 10px;
margin: 10px;
 }
 
 .card-container .card img{
  text-align: center;
  width:80px;
  border-radius: 50%;
 }
 tbody img{
  width:70px;
  border: 1px solid white;
  border-radius: 5px;
 }
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
  font-size: 10px;
}

.btn:hover{
  background-color: black;
  color: #44A1A0;
}
 
.col i{
  background-color: #44A1A0;
  padding: 10px;
  color: white;
  font-weight: 900;
  border: 1px solid #44A1A0;
  border-radius: 10px;
  width: 10%;
}
  @media screen and (max-width: 700px) {
 body{
  font-size: 10px;
 }
 .card-container{
  grid-template-columns: auto auto;
  
 }
}
@media screen and (max-width: 300px) {
 body{
  font-size: 10px;
 }
 .card-container{
  grid-template-columns: auto;
  
 }
}

 
</style>