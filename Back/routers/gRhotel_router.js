const express = require("express")
const ghotel_Controller = require("../controllers/gRhotel_controller")
const route = express.Router()
const upload = require("../middleware/uploadFile") 



route.post("/create",upload.single("photo"),ghotel_Controller.create)
route.get("/getall",ghotel_Controller.getall)
route.put("/update/:id",ghotel_Controller.update)
route.get("/getbyname",ghotel_Controller.getbyname)
route.get("/getbyid/:id",ghotel_Controller.getbyid)
route.delete("/delete/:id",ghotel_Controller.delete)
module.exports= route
//upload.single("photo"),