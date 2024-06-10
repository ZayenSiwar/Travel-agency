const express = require ("express")
const route = express.Router()

const usercontroller = require("../controllers/user_controller")
const {verifytoken,verifyTokenAndauthorization,verifytokenAndAdmin}=require("../middleware/auth")
const upload = require("../middleware/uploadFile") 
// ,upload.single("photo")

route.post("/create",usercontroller.create)
route.get("/getall",usercontroller.getall)
route.get("/stats",usercontroller.getstats)
route.get("/getbyid/:id",usercontroller.getbyid)
route.get("/getbyname",usercontroller.getbyname)
route.put("/update/:id",verifyTokenAndauthorization,usercontroller.update)
route.delete("/delete/:id",usercontroller.delete)
route.put("/status",usercontroller.Updateuser)
module.exports = route


