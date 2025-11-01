const express = require("express")
const app = express()

app.set("view engine","ejs")

app.get("/",(req,res)=>{
console.log("here")
res.render("index",{ Textssssss:"semsem",text:"zzz"})
})

const userrouter=require("./routes/users")

app.use("/users",router)

app.listen(3000)