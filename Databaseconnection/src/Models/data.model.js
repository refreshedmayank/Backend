const mongoose = require("mongoose")
// creating schema - telling db how my data actually looks like.
const Dataschema = new mongoose.Schema({
    "title": String,
    "description": String
})
const Data = mongoose.model("Data", Dataschema)
module.exports = Data;