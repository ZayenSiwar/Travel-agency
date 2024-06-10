const express = require("express")
const contratPromo_Controller = require("../controllers/contratPromo_controller")
const route = express.Router()


route.post("/create",contratPromo_Controller.create)
route.get("/getall",contratPromo_Controller.getall)
route.put("/update/:id",contratPromo_Controller.update)
route.get("/getbyname",contratPromo_Controller.getbyname)
route.get("/getbyid/:id",contratPromo_Controller.getbyid)
route.delete("/delete/:id",contratPromo_Controller.delete)
module.exports= route
