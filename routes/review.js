const express = require("express");
const router = express.Router({ mergeParams: true }); 
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const ExpressError = require("../utils/ExpressError.js"); 
const { reviewSchema } = require("../Schema.js");
const reviewController = require("../controllers/review.js");
const { isLoggedIn } = require("../middleware"); // ✅ Add this

// Middleware to validate review input
const validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        const errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    }
    next();
};

// CREATE Review (only logged-in users)
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.createReview));

// DELETE Review (optional: protect this too)
router.delete("/:reviewId", isLoggedIn, wrapAsync(reviewController.deleteReview));

module.exports = router;
