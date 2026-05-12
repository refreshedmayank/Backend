const Db_connection = require("./src/Database/Db")
Db_connection()
const app = require("./src/app")
app.listen(3000,()=>{
    console.log("The server has been started at port 3000")
})
