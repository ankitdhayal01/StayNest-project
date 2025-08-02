const express = require("express");
const router = express.Router();
const User=require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport=require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userscontroller=require("../controllers/users.js");

router.route("/signup")
  .get((userscontroller.rendersignupform))
  .post(wrapAsync(userscontroller.signupuser));


router.route("/login").get((userscontroller.renderloginform))
.post(saveRedirectUrl,passport.authenticate("local",{failureRedirect: '/login',failureFlash:true}),(userscontroller.loginuser));

router.get("/logout",(userscontroller.logoutuser));
 module.exports=router;