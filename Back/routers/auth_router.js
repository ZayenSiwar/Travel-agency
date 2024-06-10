const express = require("express")
const usercontroller = require ("../controllers/auth_controller")
const route = express.Router()




route.post("/login",usercontroller.login)
route.post("/refreshToken",usercontroller.RefreshToken)
route.post("/logout",usercontroller.logout)


module.exports = route