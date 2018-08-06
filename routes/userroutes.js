const express = require("express");
const route = express.Router();
const User = require("../models/User");
route.post("/register",(req,res)=>{
    var userid = req.body.userid;
    var pwd = req.body.pwd;
    var uname = req.body.uname;
    const userObject= new User(userid,pwd,uname);
    const userOperations = require("../db/usercrud");
    userOperations.register(userObject,res);
});
route.post('/login',(req,res)=>{
    var userid = req.body.userid;
  var pwd = req.body.pwd;
  const userObject= new User(userid,pwd);
  const userOperations = require("../db/usercrud");
  userOperations.login(userObject,res);
});
module.exports = route;