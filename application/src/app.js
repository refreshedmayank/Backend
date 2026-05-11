// Creating server 
const express = require("express") // requiring express 
const app = express() // storing express call inside app variable
app.use(express.json())
const Notes = []
app.post('/notes',(req, res) =>{
    console.log(req.body)
const Note = req.body
Notes.push(Note)
 res.status(201).json({
    message: "note created successfully"
 })
})
module.exports = app 
// exporting the created code incase to be imported by another file. node

