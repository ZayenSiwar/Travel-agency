const express = require("express")
const gExcursion_Controller = require("../controllers/gExcursion_controller")
const route = express.Router()
const upload = require("../middleware/uploadFile") 

route.post("/create",upload.array("photos"),gExcursion_Controller .create)
route.get("/getall",gExcursion_Controller.getall)
route.put("/update/:id",gExcursion_Controller.update)
route.get("/getbyname",gExcursion_Controller.getbyname)
route.get("/getbyid/:id",gExcursion_Controller.getbyid)
route.delete("/delete/:id",gExcursion_Controller.delete)
module.exports= route