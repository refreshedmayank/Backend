require("dotenv").config()
const mongoose = require('mongoose')
async function Db_connect(){
    await mongoose.connect(process.env.MONGODB_URI)
}
module.exports = Db_connect;

