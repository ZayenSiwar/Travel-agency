const express = require("express")
const chambre_Controller = require("../controllers/chambre_controller")
const route = express.Router()
const upload = require("../middleware/uploadFile") 


route.post("/create",upload.single("photo"),chambre_Controller.create)
route.get("/getall", chambre_Controller.getall)
route.put("/update/:id", chambre_Controller.update)
route.get("/getbyname", chambre_Controller.getbyname)
route.get("/getbyhotel",chambre_Controller.getbyhotel)
route.get("/getbyid/:id", chambre_Controller.getbyid)
route.delete("/delete/:id", chambre_Controller.delete)
module.exports= route
