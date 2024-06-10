const express = require("express")
const gVoyage_Controller = require("../controllers/gVoyage_controller")
const route = express.Router()
const upload = require("../middleware/uploadFile")



route.post("/create",upload.single("photo"),gVoyage_Controller.create)
route.get("/getall",gVoyage_Controller.getall)
route.put("/update/:id",gVoyage_Controller.update)
route.get("/getbyname",gVoyage_Controller.getbyname)
route.get("/getbyid/:id",gVoyage_Controller.getbyid)
route.delete("/delete/:id",gVoyage_Controller.delete)
module.exports= route
