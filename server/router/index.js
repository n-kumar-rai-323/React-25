const router = require("express").Router()

const userRoutes = require("../modules/users/user.route")

router.use("/users", userRoutes)

module.exports= router