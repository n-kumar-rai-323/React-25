const router = require("express").Router();
const Controller = require("./user.controller");
const {secureAPI}=require("../../utils/secure")


router.post("/login", async(req, res, next) => {
 
    try {
        const result = await Controller.login(req.body);
        console.log(result)
        res.json({ data: result, msg: "User login successfully" });
    } catch (e) {
   
        console.error("Error during login request:", e);
        // Pass the error to Express's error handling middleware
        next(e);
    }
});
router.get("/profile", secureAPI(), async (req, res, next) => {
    try {
        // req.user will contain the data from the token if secureAPI attached it
        res.json({ data: req.user, msg: "Profile data" });
    } catch (e) {
        next(e);
    }
});
router.post("/register", (req, res, next) => {
  try {
    const result = Controller.register(req.body);
    res.json({ data: result, msg: "User login successfully" });
  } catch (e) {
    next(e);
  }
});


module.exports=router
