const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotENV = require("dotenv");

//creating instance of express
const app = express();
const PORT = 8000;

//middleWare for the JSON
app.use(bodyParser.json());

//connecting the DB with the server
mongoose.connect("mongodb+srv://adil:Nigar01@cluster0.v2scauy.mongodb.net/").then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log("Error connetcing to MongoDB ", err);
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})