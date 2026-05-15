const app = require('./src/app')
const Db_connection = require('./src/Database/Database')
// calling the function
Db_connection()
const port = 3000
app.listen(port,()=>{
    console.log(`The server has been started at ${port} and has been connected to database`)
})
