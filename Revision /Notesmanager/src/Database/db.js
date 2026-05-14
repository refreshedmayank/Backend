const mongoose = require('mongoose')
async function db_connect(){
    await mongoose.connect("mongodb+srv://refreshedmayank_db_user:ndFUyEGMpq6Be2dy@cluster0.f7vkhcs.mongodb.net/Taskmanager")
}
module.exports = db_connect;