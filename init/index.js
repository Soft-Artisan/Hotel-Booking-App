// Contain the Logics of the initialization of the database
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
//Stablish the DB connection
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB [using index.js]");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({}); // To delete any previous data
  await Listing.insertMany(initData.data);
  console.log("data was initialized [using index.js]");
};

initDB();