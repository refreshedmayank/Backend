//Programming the server here
const express = require('express');
const Postmodel = require('./models/post.model')
const Uploadfile = require("./Services/storage.service")
const multer = require('multer')
const app = express()
app.use(express.json())
const Upload = multer({storage: multer.memoryStorage()}) 

app.post("/create-post", Upload.single("Image"), async(req, res)=>{
    const buffer = req.file.buffer
    const result = await  Uploadfile(buffer) // buffer going to our imageKit sdk function
    // Now we have to push this file which is image(buffer) and caption inside our database
     await Postmodel.create({
        Image: result.url,
        Caption: req.body.Caption
    
})
    res.status(201).json({
        "Message": "Post Created Succesfully"
    })
})
app.get("/posts",async(req, res)=>{
    const Post = await Postmodel.find()
  return  res.status(200).json({
        Message:"Posts fetched successfully",
        Post
    })
})

module.exports = app; 


