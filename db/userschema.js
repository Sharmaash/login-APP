const mongoose = require("./connection");
const UserSchema = mongoose.Schema;
var user = new UserSchema({userid:String, pwd:String, uname:String});
var User = mongoose.model("users",user);
module.exports = User;