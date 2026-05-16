const mongoose = require('mongoose')
const PostSchema = new mongoose.Schema({
    Image: String,
    Caption: String
})
const Postmodel = mongoose.model("Post", PostSchema)
module.exports = Postmodel