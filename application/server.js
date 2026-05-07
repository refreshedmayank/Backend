// This is where server starts 
const app = require("./src/app") // importing the created module from app.js 
app.listen(3000,()=>{
    console.log("Server is running on port 3000") // call back function that execute after running server. 
})