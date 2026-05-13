const mongoose = require('mongoose')
async function Db_connect(){
    await mongoose.connect("mongodb+srv://refreshedmayank_db_user:ndFUyEGMpq6Be2dy@cluster0.f7vkhcs.mongodb.net/Project")
}
module.exports = Db_connect;

