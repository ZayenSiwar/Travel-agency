const express = require("express")
const gRomra_Controller = require("../controllers/gRomra_controller")
const route = express.Router()
const upload = require("../middleware/uploadFile")

route.post("/create",gRomra_Controller.create)
route.get("/getall",gRomra_Controller.getall)
route.put("/update/:id",gRomra_Controller.update)
route.get("/getbyname",gRomra_Controller.getbyname)
route.get("/getbyid/:id",gRomra_Controller.getbyid)
route.delete("/delete/:id",gRomra_Controller.delete)
module.exports= route