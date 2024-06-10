const express = require("express")
const gRex_Controller = require("../controllers/gRexcursion_controller")
const route = express.Router()
const upload = require("../middleware/uploadFile")

route.post("/create",gRex_Controller.create)
route.get("/getall",gRex_Controller.getall)
route.put("/update/:id",gRex_Controller.update)
route.get("/getbyname",gRex_Controller.getbyname)
route.get("/getbyid/:id",gRex_Controller.getbyid)
route.delete("/delete/:id",gRex_Controller.delete)
module.exports= route