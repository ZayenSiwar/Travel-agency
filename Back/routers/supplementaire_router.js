const express = require("express")
const supplementaire_controller = require("../controllers/supplementaire_controller")
const route = express.Router()
 


route.post("/create",supplementaire_controller.create)
route.get("/getall",supplementaire_controller.getall)
route.put("/update/:id",supplementaire_controller.update)
route.get("/getbyname",supplementaire_controller.getbyname)
route.get("/getbyid/:id",supplementaire_controller.getbyid)
route.delete("/delete/:id",supplementaire_controller.delete)
module.exports= route