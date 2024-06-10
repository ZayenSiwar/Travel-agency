const express = require("express")
const contrat_Controller = require("../controllers/contrat_controller")
const route = express.Router() 


route.post("/create",contrat_Controller.create)
route.get("/getall",contrat_Controller.getall)
route.put("/update/:id",contrat_Controller.update)
route.get("/getbyname",contrat_Controller.getbyname)
route.get("/getbyid/:id",contrat_Controller.getbyid)
route.delete("/delete/:id",contrat_Controller.delete)
module.exports= route
