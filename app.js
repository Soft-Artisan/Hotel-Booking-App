const express = require('express');
const path = require('path');
const engine = require('ejs-mate');
const app = express();
const Listing = require('./models/listing');
const port = 3000;
// Set EJS as the view engine and use ejs-mate for layout support
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Import mongoose library
const mongoose = require('mongoose');
// Establish database connection
mongoose.connect('mongodb://localhost:27017/hotelbooking');
// Get the default connection object
const db = mongoose.connection;
// Event listener for connection errors
db.on("error", (err) => {
  console.error("Connection error:", err);
});
// Event listener for successful connection
db.once("open", () => {
  console.log("Database is Connected !");
});

app.get('/', (req, res) => {
  res.send('Hi ! It is the ROOT ... ');
});

app.get("/listings", async(req, res) => {
  const allListings = await Listing.find({});
  res.render("/listings/index", {allListings});
});

//Testing data just to check and create db
app.get("/testListing", async(req, res) => {
    let sampleListing = new Listing({
        title: "My Home",
        description: "By the beach",
        price:1200,
        location:"San Deigo",
        country: "USA",
    });
await sampleListing.save();
console.log("Sample is Saved");
res.send("Successful testing");
});


app.listen(port, () => {
 console.log(`Server running on http://localhost:${port}`);
});