const express = require("express")
const Data = require("./Models/data.model")
const app = express()
app.use(express.json())
// Post api
app.post('/notes',async(req, res)=>{
    const notebody = req.body
    await Data.create({
        title: notebody.title,
        description: notebody.description
    })
    res.status(200).json({
        "Message": "The data has been uploaded succesfully"
    })
})

module.exports = app
