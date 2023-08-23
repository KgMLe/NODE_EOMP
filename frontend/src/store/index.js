import { createStore } from 'vuex'
import axios from 'axios'
const eompBackend = "https://fit-space-ssmq.onrender.com/" 

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
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
    addUser(state, user){
      state.users.push(user)
    },
    addProduct (state, product){
      state.users.push(product)
    },
    setProducts(state, products){
      state.products = products
    },
    setProduct(state, product){
      state.product = product
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
  // fetch products
  actions: {
    async fetchProducts(context){
      try{
          const {data} = await axios.get(`${eompBackend}products`)
          context.commit("setProducts", data.results )
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
      // add Product
    async addProduct(context, payload) {
        try {
          const response = await axios.post(`${eompBackend}product/add`, payload);
          const { msg, product } = response.data;
    
          if (msg) {
            context.commit("setMsg", msg);
          } else {
            context.commit("addProduct", product);
            context.commit("setMsg", "Product added successfully");
          }
        } catch (e) {
          context.commit("setMsg", "An error occurred while adding the product");
        }
    },
    // addUser
    async addUser(context, payload) {
      try {
        const response = await axios.post(`${eompBackend}user/add`, payload);
        const { msg, user } = response.data;
  
        if (msg) {
          context.commit("setMsg", msg);
        } else {
          context.commit("addUser", user); // Update the users array in the state
          context.commit("setMsg", "User added successfully");
        }
      } catch (e) {
        context.commit("setMsg", "An error occurred while adding the user");
      }
    },
  },
    
  modules: {
  }
})