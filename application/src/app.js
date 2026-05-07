// Creating server 
const express = require("express") // requiring express 
const app = express() // storing express call inside app variable
// const port = 3000 // declaring port number 
// app.listen(port) // listening app on declared port 
app.use(express.json()) //middleware, read the data 
const notes =[]
app.post('/notes', (req, res)=>{
const Note = req.body // storing notes body inside Note variable
notes.push(Note)
})
module.exports = app // exporting the created code incase to be imported by another file. 