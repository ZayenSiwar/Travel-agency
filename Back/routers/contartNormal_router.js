const express = require("express")
const contratNormal_Controller = require("../controllers/contratNormal_controller")
const route = express.Router() 


route.post("/create", contratNormal_Controller.create)
route.get("/getall", contratNormal_Controller.getall)
route.put("/update/:id", contratNormal_Controller.update)
route.get("/getbyname", contratNormal_Controller.getbyname)
route.get("/getbyid/:id", contratNormal_Controller.getbyid)
route.delete("/delete/:id", contratNormal_Controller.delete)
module.exports= route
