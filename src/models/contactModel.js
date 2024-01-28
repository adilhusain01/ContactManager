const mongoose = require("mongoose");

//defining the schema for contacts
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    number:{
        type: String,
        required: true,
        unique: true,
    }
})

const User = mongoose.model("User", userSchema);

module.exports = User;