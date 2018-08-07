const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
passport.use(new GoogleStrategy({
clientID:'726482799021-5e1aft7srp9i8qihn9uaf9gp1m3d1boh.apps.googleusercontent.com',
clientSecret:'SUrAziGVd_nbQRoDzfGRyVHX',
callbackURL:'/google/callback'
},(accessToken,refreshToken,profile,done)=>{
    //console.log("Passport Google Call Back Function.... AccessToken "+accessToken+" Ref "+refreshToken+" Profile ",profile,"Done ",done);
    console.log("Call to DB  to store data");
    return done(null,{token:accessToken,profile:profile})  ; // null represent no error
}));
 passport.serializeUser((user,done)=>{
    done(null,user.id);
});
passport.deserializeUser((user,done)=>{
    done(null,{profile:profile,t})
});

