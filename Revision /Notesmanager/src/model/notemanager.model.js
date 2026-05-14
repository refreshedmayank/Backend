const mongoose = require('mongoose')
const TaskSchema = new mongoose.Schema({
    "Tasks": String
})
const Tasks = mongoose.model("Tasks",TaskSchema );
module.exports = Tasks;
