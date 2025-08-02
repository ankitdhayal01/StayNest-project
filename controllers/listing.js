const Listing=require("../models/listing");
module.exports.index=async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index", { allListings }); 
};
module.exports.rendernew=(req, res) => {
    console.log(req.user);
    
    res.render("listings/new");
};
module.exports.createform=async (req, res) => {
    let url=req.file.path;
    let filename=req.file.filename;
   
     const newListing = new Listing(req.body.listing);
     newListing.owner=req.user._id;
     newListing.image={url,filename};
    await newListing.save();
    req.flash("success", "New listing created!");
    res.redirect(`/listings`);
};
module.exports.showform=async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews").populate("owner");
    if (!listing) {
        req.flash("error", "Listing not found!");
        return res.redirect("/listings");
    }
    res.render("listings/show", { listing });
};
module.exports.editform=async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Cannot find that listing!");
        return res.redirect("/listings");
    }
    res.render("listings/edit", { listing });
};
module.exports.updateform=async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findByIdAndUpdate(id, req.body.listing, { new: true, runValidators: true });
    req.flash("success", "Listing updated!");
    res.redirect(`/listings/${listing._id}`);
};
module.exports.deleteform=async (req, res) => {
    const { id } = req.params;
    const deletedListing = await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing deleted!");
    res.redirect("/listings");
};

