// Creating server 
const express = require("express") // requiring express 
const app = express() // storing express call inside app variable
app.use(express.json())
const Notes = []
// Post Api
app.post('/notes',(req, res) =>{
    console.log(req.body)
const Note = req.body
Notes.push(Note)
 res.status(201).json({
    message: "note created successfully"
 })
})
// Get Api 
app.get('/notes',(req, res)=>{
    res.status(200).json({
        "Message": "Notes Fetched Succesfully",
        "Notes": Notes
    })
})
// Delete Api - delete/notes/:index (delete/notes/:1,2,3....1000+ its called params which is dynamic)
app.delete('/notes/:index', (req, res)=>{
    const Index = req.params.index
    delete Notes[Index]
    res.status(200).json({
        "Message": "Note Deleted Succesfully"
    })
})
module.exports = app 
// exporting the created code incase to be imported by another file. node

                                       