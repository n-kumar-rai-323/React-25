const router = require('express').Router()
const Controller = require("../users/user.controller")
router.post("/",(req,res,next)=>{
try{
    const result = Controller.user(req.body)
    res.json({data:result, msg:"User login successfully"})
}catch(e){
next(e)
}
})
module.exports=router;