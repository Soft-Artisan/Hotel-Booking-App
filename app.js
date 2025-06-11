const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

//iii) DB connection
// Doc(Quick Start) : https://mongoosejs.com/docs/index.html
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
async function main() {
  await mongoose.connect(MONGO_URL);
}
//iv) catching error in DB 
main()
  .then(() => {
    console.log("Successfully Connected To DB");
  })
  .catch((err) => {
    console.log(err);
  });


//ii)To get the output in the browser
app.get("/", (req, res) => {
  res.send("Hi, I am root at http://localhost:8080");
});

// //Creating a route to TEST our first model at : 
// // http://localhost:8080/testlisting
// app.get("/testListing", async (req, res) => {
//      let sampleListing = new Listing({
//      title: "My New Villa",
//      description: "By the beach",
//      price: 1200,
//      location: "Calangute, Goa",
//      country: "India",
//   });

//    await sampleListing.save();
//    console.log("sample was saved");
//    res.send("successful testing");
// });

// i)To make the server listening
app.listen(8080, () => {
  console.log("Our Server is Listening at Port 8080");
});

