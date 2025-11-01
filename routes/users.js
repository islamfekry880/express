const express=express()
const router=express.Router()

router.get("/",(req,res)=>{
    res.send("user list")
})



module.exports=userroute()