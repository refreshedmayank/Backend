require("dotenv").config()
const Imagekit = require("@imagekit/nodejs").default
// initiallizing image kit 
const client = new Imagekit({
    privateKey: process.env.Imagekitprivatekey
})
// creating a async function to upload file (buffer) taken from req to imageKit
// (buffer) came from app -> to upload(buffer) -> .toString -> imageKit
async function Uploadfile(buffer){
    const result = await client.files.upload({
        file: buffer.toString("base64"),
        fileName: "image.jpg"
    })
    return result

}
module.exports = Uploadfile;
