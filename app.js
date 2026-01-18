if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const ExpressError = require("./utils/ExpressError.js");

// Models
const User = require("./models/user.js");

// Routes
const userRouter = require("./routes/user.js");
const listingsRouter = require("./routes/listing.js");
const reviewsRouter = require("./routes/review.js");

// Connect to MongoDB

const dbUrl = process.env.ATLASDB_URL;

mongoose.set('strictQuery', true); 

main().then(() => console.log('Connected to DB')).catch(err => console.error('Connection failed:', err));

async function main() {
  await mongoose.connect(dbUrl);
}


// View engine setup
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));

// Session configuration

const store=MongoStore.create({
    mongoUrl: dbUrl,
    crypto: {
    secret: process.env.SECRET
  },
  touchAfter:24*3600,


});

store.on("error",()=>
{
    console.log("error in mongo Session",err);
});
const sessionOptions = {
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expire: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    },
};


app.use(session(sessionOptions));
app.use(flash());

// Passport setup
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ✅ Flash messages and currentUser middleware
app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currentUser = req.user || null;
    next();
});

// Routes
app.use("/listings", listingsRouter);
app.use("/listings/:id/reviews", reviewsRouter);
app.use("/", userRouter);
app.use("/experience",(req,res)=>
{
    res.send("Comming Soon");

}
);
app.use("/service",(req,res)=>
{
    res.send("Comming Soon");

}
);


app.post("/search", (req, res) => {
    const { where, date, who } = req.body;
    res.send(`<h2>Search Results for:</h2>
              <p><strong>Destination:</strong> ${where}</p>
              <p><strong>Date:</strong> ${date}</p>
              <p><strong>Guests:</strong> ${who}</p>`);
});
app.get("/", (req, res) => {
    res.redirect("/listings");
});

// 404 handler
app.use((req, res) => {
    res.status(404).render("listings/error", { message: "Page Not Found!" });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error("ERROR STACK >>>", err.stack);
    const { statusCode = 500, message = "Something went wrong!" } = err;
    res.status(statusCode).render("listings/error", { message });
});

// Server start
app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});
