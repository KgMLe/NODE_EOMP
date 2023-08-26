import { createStore } from 'vuex'
import axios from 'axios'
const eompBackend = "https://fit-space-ssmq.onrender.com/" 

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    selectedCategory: null,
    spinner: false,
    token: null,
    msg: null
  },
  
  getters: {
  },

  mutations: { // allows us to modify the state
    setUsers(state, users){
      state.users = users
    },
    setUser(state, user){
      state.user = user
    },
    register(state, user){
      state.users.push(user)
    },
    deleteUser(state, userID) {
      state.users = state.users.filter(user => user.id !== userID);
    },
    updateUser(state, user){
      state.users = state.users.map(u => u.id === user.id ? user : u)
    },
    registerProduct (state, product){
      state.users.push(product)
    },
    setProducts(state, products){
      state.products = products
    },
    setProduct(state, product){
      state.product = product
    },
    deleteProduct(state, prodID) {
    state.products = state.products.filter(product => product.id !== prodID);
    },
    updateProduct(state, product){
      state.products = state.products.map(p => p.id === product.id ? product : p)
    },
    selectedCategory(state, category){
      state.selectedCategory = category
    },
    setSpinner(state, value){
      state.spinner= value
    },
    setToken (state, token){
      state.token = token
    },
    setMsg (state, msg){
      state.msg = msg
    },
  },
  
  actions: {
    // fetch products
    async fetchProducts(context){
      try{
          const {data} = await axios.get(`${eompBackend}products`)
          context.commit("setProducts", data.results )
      }catch(e){
        context.commit("setMsg", "An error occured")
      }
    },
    // fetch product
    async fetchProduct(context, id){
      try{
          const {data} = await axios.get(`${eompBackend}product/${id}`)
          context.commit("setProduct", data.results )
      }catch(e){
        context.commit("setMsg", "An error occured")
      }
    },
    //fetch categories
    async fetchCategories(context){
      try{
          const {data} = await axios.get(`${eompBackend}categories`)
          context.commit("selectedCategory", data.results )
      }catch(e){
        context.commit("setMsg", "An error occured")
      }
    },
    // fetch users
    async fetchUsers(context){
      try{
          const {data} = await axios.get(`${eompBackend}users`)
          context.commit("setUsers", data.results )
      }catch(e){
        context.commit("setMsg", "An error occured")
      }
    }, 
    // fetch user
    async fetchUser(context, id){
      try{
          const {data} = await axios.get(`${eompBackend}user/${id}`)
          context.commit("setUser", data.results )
      }catch(e){
        context.commit("setMsg", "An error occured")
      }
    },
    // update user
    async updateUser(context, payload) {
      try {
        const response = await axios.patch(`${eompBackend}user/${payload.id}`, payload);
        const { msg } = response.data;
  
        if (msg) {
          context.commit("setMsg", msg);
        } else {
          context.commit("setMsg", "User updated successfully");
        }
      } catch (e) {
        context.commit("setMsg", "An error occurred while updating the user");
      }
    }, 
      // deleteUser
      async deleteUser(context, id) {
        try {
          const response = await axios.delete(`${eompBackend}user/${id}`);
          const { msg } = response.data;
    
          if (msg) {
            context.commit("setMsg", msg);
          } else {
            context.commit("setMsg", "User deleted successfully");
          }
        } catch (e) {
          context.commit("setMsg", "An error occurred while deleting the user");
        }
      },
  
      // addUser
      async register(context, payload) {
        try {
          const response = await axios.post(`${eompBackend}register`, payload);
          const { msg, user } = response.data;
    
          if (msg) {
            context.commit("setMsg", msg);
          } else {
            context.commit("register", user); // Update the users array in the state
            context.commit("setMsg", "User added successfully");
          }
        } catch (e) {
          context.commit("setMsg", "An error occurred while adding the user");
        }
      },
      // add Product
    async registerProduct(context, payload) {
        try {
          const response = await axios.post(`${eompBackend}product/register`, payload);
          const { msg, product } = response.data;
    
          if (msg) {
            context.commit("setMsg", msg);
          } else {
            context.commit("registerProduct", product);
            context.commit("setMsg", "Product added successfully");
          }
        } catch (e) {
          context.commit("setMsg", "An error occurred while adding the product");
        }
    },

    // deletProduct
    async deleteProduct(context, id) {
      try {
        const response = await axios.delete(`${eompBackend}product/${id}`);
        const { msg } = response.data;
  
        if (msg) {
          context.commit("setMsg", msg);
        } else {
          context.commit("setMsg", "Product deleted successfully");
        }
      } catch (e) {
        context.commit("setMsg", "An error occurred while deleting the product");
      }
    },
  
    // updateProduct
    async updateProduct(context, payload) {
      try {
        const response = await axios.patch(`${eompBackend}product/${payload.id}`, payload);
        const { msg } = response.data;
  
        if (msg) {
          context.commit("setMsg", msg);
        } else {
          context.commit("setMsg", "Product updated successfully");
        }
      } catch (e) {
        context.commit("setMsg", "An error occurred while updating the product");
      }
    },
  },
    
  modules: {
  }
})