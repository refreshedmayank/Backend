const express = require("express")
const app = express()
app.use(express.json())
const lists = []
app.post('/list',(req, res)=>{
    const listbody = req.body
    // pushing the body of api inside our array of list
    lists.push(listbody)
    // sending response in back 
    res.status(200).json({
    "message": "The data has be uploaded succesfully"
    })

})
// creating get api to fetch the lists and display 
app.get("/list",(req, res)=>{
    res.status(200).json({"List":lists})
})
// creating delete api to delete items in array 
app.delete('/list/:index',(req, res)=>{
// storing parameter value inside index variable
const Index = req.params.index
// deleting the item based on index from the array
lists.splice(Index, 1)
// sending response back
res.status(200).json({
    "Message": "The item is succesfully deleted now"
}) 

})
// Creating api to patch the items in array of the list 
app.patch("/list/:index",(req, res) =>{
    // storing the parameters value inside index variable
    const Index = req.params.index
    const newbody = req.body.name
    lists[Index].name = newbody
    // sending response back
    res.status(200).json({
        "Message": "The following item has updated succesfully "
    })
} )
module.exports = app
