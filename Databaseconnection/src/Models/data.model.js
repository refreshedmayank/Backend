const mongoose = require("mongoose")
// creating schema - telling db how my data actually looks like.
const Dataschema = new mongoose.Schema({
    "title": String,
    "description": String
})
const Data = new mongoose.model(Data, Dataschema)