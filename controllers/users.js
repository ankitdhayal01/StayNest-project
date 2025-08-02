const User=require("../models/user.js");
module.exports.rendersignupform=(req,res)=>
{
    res.render("users/signup.ejs");
};
module.exports.signupuser=async(req,res)=>
{
    try{
        let {username,email,password}=req.body;
    const newUser=new User({email,username});
    const registeredUser=await User.register(newUser,password);
    console.log(registeredUser);
    req.flash("success","Welcome to wanderlust");
    res.redirect("/login");
    } catch(e)
    {
        req.flash("error",e.message);
        res.redirect("/signup");
    }
    
};
module.exports.renderloginform=(req,res)=>
{
    res.render("users/login.ejs");
};
module.exports.loginuser=async(req,res)=>
{
    req.flash("success","welcome back to wanderlust!");
    const redirectUrl = res.locals.redirectUrl 
     res.redirect(redirectUrl);

};
module.exports.logoutuser=(req,res)=>
{
    req.logout((err)=>
    {
        if(err){
           return  next(err);
        }
        req.flash("success","you are logged out!");
        res.redirect("/listings");
    })
};