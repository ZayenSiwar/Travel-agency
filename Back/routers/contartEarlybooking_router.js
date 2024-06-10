const express = require("express")
const contratEarly_Controller = require("../controllers/contratEarlybooking_controller")
const route = express.Router()



route.post("/create",contratEarly_Controller.create)
route.get("/getall",contratEarly_Controller.getall)
route.put("/update/:id",contratEarly_Controller.update)
route.get("/getbyname",contratEarly_Controller.getbyname)
route.get("/getbyid/:id",contratEarly_Controller.getbyid)
route.delete("/delete/:id",contratEarly_Controller.delete)
module.exports= route
