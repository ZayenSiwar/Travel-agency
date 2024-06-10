const express = require("express")
const reservation_Controller = require("../controllers/terification_controller")
const route = express.Router()



route.post("/create",reservation_Controller.create)
route.get("/getall",reservation_Controller.getall)
route.put("/update/:id",reservation_Controller.update)
route.get("/getbyname",reservation_Controller.getbyname)
route.get("/getbyid/:id",reservation_Controller.getbyid)
route.delete("/delete/:id",reservation_Controller.delete)
module.exports= route