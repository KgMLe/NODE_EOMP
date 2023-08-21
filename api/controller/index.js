
require('dotenv').config();
const express = require("express");
const routes = express.Router();
const bodyParser = require("body-parser")
//--------------------------------------
//----------------------------------------------------
//-----------routing to USERS-----------------------

//---------import all model objects------
const { users } = require("../model");

//fetch all user
routes.get("/users", (req, res) => {
    users.fetchUsers(req, res);
  });
  //fetch 1 user
  routes.get("/user/:id", (req, res) => {
    users.fetchUser(req, res);
  });
  //register user
  routes.post("/register", bodyParser.json(), (req, res) => {
    users.register(req, res);
  });
  //update user
  routes.patch("/users/:id", bodyParser.json(), (req, res) => {
    users.updateUser(req, res);
  });
  //delete user
  routes.delete("/user/:id", (req, res) => {
    users.deleteUser(req, res);
  });
  //login a user 
  routes.post("/login", bodyParser.json(), (req, res) => {
      users.login(req, res);
    });

    
module.exports = {
    routes
  }