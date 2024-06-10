const express = require("express")
const gHotel_Controller = require("../controllers/gHotel_controller")
const route = express.Router()
const upload = require("../middleware/uploadFile") 


route.post("/create",upload.array("photos"),gHotel_Controller.create)
route.get("/getall",gHotel_Controller.getall)
route.put("/update/:id",gHotel_Controller.update)
route.get("/getbyname",gHotel_Controller.getbyname)
route.get("/getbyid/:id",gHotel_Controller.getbyid)
route.delete("/delete/:id",gHotel_Controller.delete)
module.exports= route