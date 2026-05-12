const mongoose = require("mongoose")
async function Db_connection(){
    await mongoose.connect("mongodb+srv://refreshedmayank_db_user:ndFUyEGMpq6Be2dy@cluster0.f7vkhcs.mongodb.net/my_first_db")
    console.log("Connected to Database")
}
module.exports = Db_connection;