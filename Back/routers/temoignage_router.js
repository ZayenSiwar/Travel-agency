const express = require("express")
const temoignage_Controller = require("../controllers/temoignage_controller")
const route = express.Router()


route.post("/createHotel/:hotel_id",temoignage_Controller.createReviewforHotel)
route.post("/create",temoignage_Controller.create)
route.get("/getall",temoignage_Controller.getall)
route.put("/update/:id",temoignage_Controller.update)
route.get("/getbyname",temoignage_Controller.getbyname)
route.get("/getbyid/:id",temoignage_Controller.getbyid)
route.delete("/delete/:id",temoignage_Controller.delete)
module.exports= route

