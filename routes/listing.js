const express = require("express");
const router = express.Router();
const ExpressError = require("../utils/ExpressError.js"); 
const { listingSchema } = require("../Schema.js");
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { isLoggedIn } = require("../middleware.js");
const listingController = require("../controllers/listing.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

// Middleware to validate listing data
const validateListing = (req, res, next) => {
    const { error } = listingSchema.validate(req.body);
    if (error) {
        const errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};

// Middleware to check ownership
const isOwner = async (req, res, next) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing.owner.equals(req.user._id)) {
        req.flash("error", "You do not have permission to do that!");
        return res.redirect(`/listings/${id}`);
    }
    next();
};

// INDEX + SEARCH BY LOCATION
router.get("/", async (req, res) => {
    const { location } = req.query;
    let listings;

    if (location && location.trim() !== "") {
        listings = await Listing.find({
            location: { $regex: new RegExp(location, "i") }
        });
    } else {
        listings = await Listing.find({});
    }

    res.render("listings/index", { listings });
});

// NEW LISTING FORM
router.get("/new", isLoggedIn, listingController.rendernew);

// CREATE LISTING
router.post(
    "/",
    isLoggedIn,
    upload.single("listing[image]"),
    wrapAsync(listingController.createform)
);

// SHOW SINGLE LISTING — includes owner and review.author population
router.get("/:id", async (req, res) => {
    const listing = await Listing.findById(req.params.id)
        .populate("owner")
        .populate({
            path: "reviews",
            populate: {
                path: "author"
            }
        });

    if (!listing) {
        req.flash("error", "Listing not found");
        return res.redirect("/listings");
    }

    res.render("listings/show", { listing });
});

// EDIT FORM
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.editform));

// UPDATE
router.put(
    "/:id",
    isLoggedIn,
    isOwner,
    validateListing,
    wrapAsync(listingController.updateform)
);

// DELETE
router.delete("/:id", isLoggedIn, isOwner, wrapAsync(listingController.deleteform));

module.exports = router;
