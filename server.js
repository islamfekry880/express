const express = require("express")
const app = express()

app.set("view engine","ejs")

app.get("/",(req,res)=>{
console.log("here")
res.render("index")
})

const router=require("./routes/users")
app.use("/users",router)

app.listen(3000)