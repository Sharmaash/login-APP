const UserSchema = require("./userschema");
var userOperations = {
  
  register(userObject,res){
    UserSchema.create(userObject,(error)=>{
      if(error){
        res.send("Error in DB , Can't Register "+error);
      }
      else{
        res.send("You Register SuccessFully....");
      }
    });
  },
  login(userObject,res){
    UserSchema.findOne({"userid":userObject.userid,"pwd":userObject.pwd},(error,record)=>{
      if(error){
        res.send("Error in DB Can't Login...."+error)
      }
      else{
        if(record){
        res.render('welcome',{"user":record.userid});
        // res.send("Welcome User");
        }
        else{
          res.send("Invalid Userid or Password");
        }
      }
    })
  }
}
module.exports = userOperations;
