const express = require("express")
const parametre_Controller = require("../controllers/parametre_controller")
const route = express.Router() 


route.post("/create",parametre_Controller.create)
route.get("/getall",parametre_Controller.getall)
route.put("/update/:id",parametre_Controller.update)
route.get("/getbyname",parametre_Controller.getbyname)
route.get("/getbyid/:id",parametre_Controller.getbyid)
route.delete("/delete/:id",parametre_Controller.delete)
module.exports= route
