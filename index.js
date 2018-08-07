const express = require("express");
const bodyParser = require("body-parser");
console.log("type express",typeof express);
const app = express();
app.set('view engine','ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
const userroute = require("./routes/userroutes");
app.use("/",userroute);
//app.use(bodyParser.json());

//gmail


const passportGoogleSt = require("./passportgoogle");  // Setup
const passport = require("passport");
app.use(passport.initialize());

app.get('/google',passport.authenticate('google',{
    scope : ['profile']
}));
app.get('/google/callback',passport.authenticate('google',
{session: false}),(req,res)=>{
    res.render('welcome');
});


//facebook
const passportFacebookSt = require('./passportfacebook');
app.get('/facebook',passport.authenticate('facebook'));

app.get('/callback',passport.authenticate('facebook',
{session: false}),(req,res)=>{
    res.render('welcome');
});



var server = app.listen(process.env.port|1234,()=>{
    console.log("server start", server.address().port);
});