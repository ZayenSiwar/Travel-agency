const express = require("express")
const gVoiture_Controller = require("../controllers/gVoiture_controller")
const route = express.Router()
const upload = require("../middleware/uploadFile") 



route.post("/create",upload.single("photo"),gVoiture_Controller.create)
route.get("/getall",gVoiture_Controller.getall)
route.put("/update/:id",gVoiture_Controller.update)
route.get("/getbyname",gVoiture_Controller.getbyname)
route.get("/getbyid/:id",gVoiture_Controller.getbyid)
route.delete("/delete/:id",gVoiture_Controller.delete)
module.exports= route
//upload.single("photo"),