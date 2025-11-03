const express=require("express")
const router = express.Router()

router.get("/",(req,res)=>{
    res.send("List Users")
})

router.route("/:id")
.get((req,res)=>{
    req.params.id
    res.send(`welcome id ${req.params.id}`)
})

.put((req,res)=>{
    req.params.id
    res.send(`id is enter ${req.params.id}`)
})
.delete((req,res)=>{
    req.params.id
    res.send(`id ${req.params.id} s deleted`)
})

module.exports=router


// const express = require("express")
// const router = express.Router()

// router.get("/",(req,res)=>{
//     res.send("Users List")
// })


// // router.route("/:id").get( (req,res) => {
// //     res.send(`id: ${req.params.id}`)
// //     console.log(req.params.id)
// // })
// // .post((req,res)=>{
// //     req.params.id
// //     res.send(`id:${req.params.id}`)
// //     console.log(req.params.id)
// // })

    


// module.exports=router