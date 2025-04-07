const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image:{
        type: String,
        default:"https://pixabay.com/photos/nature-countryside-outdoors-travel-6620939/",
        
        set: (v) => v === "" ? "https://pixabay.com/photos/nature-countryside-outdoors-travel-6620939/" : v,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;