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
// api to get the data 
app.get('/notes', async(req, res)=>{
   const Notes = await Data.find()
// findone method find specific items in database 
   //    const Notes = await Data.findOne({
//     title: "This is the title im looking for "
//    })
   res.status(200).json({
    "Message": "The Data has been fetched",
    "Notes": Notes
   })
})
// api to delete data inside data base 
app.delete('/notes/:id', async(req, res)=>{
     const ID = req.params.id
   await Data.findOneAndDelete({
        _id: ID
     })
     res.status(200).json({
        message: "Data is deleted succesfully"
     })
})
// api to update the data inside database
app.patch('/notes/:id', async(req, res)=>{
    const ID = req.params.id
    const description = req.body.description
    await Data.findOneAndReplace({_id: ID},{description: description})
    res.status(200).json({
        "Message": "Updated succesfulyy"
    })
})
module.exports = app
