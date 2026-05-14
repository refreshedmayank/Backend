const express = require('express')
const Tasks = require('./model/notemanager.model')
const app = express()
app.use(express.json())
// progarmming the server here
// creating apis

app.post("/tasks", async(req, res)=>{
    const TasksData = req.body
    await Tasks.create({
        Tasks: TasksData.task
    })
    res.status(200).json({
        "Message": "Uploaded Succesfully"
    })
})

app.get("/tasks",async(req, res)=>{
  const Task = await Tasks.find()
  res.status(200).json({
    "Message": "Fetched succesfully",
    "Tasks": Task
  })
})

app.delete("/tasks/:id",async(req, res)=>{
    const ID = req.params.id
    await Tasks.findOneAndDelete({
        _id: ID   
     })
        res.status(200).json({
            "message": "Deleted"})
})
app.patch("/tasks/:id", async(req, res)=>{
    const bodyoftasks = req.body.task
    const ID = req.params.id
    await Tasks.findOneAndReplace({_id: ID},{
        Tasks: bodyoftasks
    })
    res.status(200).json({
        "Message": "Updated"
    })
})

module.exports = app;

