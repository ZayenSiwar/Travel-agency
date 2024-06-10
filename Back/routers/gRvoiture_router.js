const express = require("express")
const gRvoiture_Controller = require("../controllers/gRvoiture_controller")
const route = express.Router()
const upload = require("../middleware/uploadFile")

route.post("/create",gRvoiture_Controller.create)
route.get("/getall",gRvoiture_Controller.getall)
route.put("/update/:id",gRvoiture_Controller.update)
route.get("/getbyname",gRvoiture_Controller.getbyname)
route.get("/getbyid/:id",gRvoiture_Controller.getbyid)
route.delete("/delete/:id",gRvoiture_Controller.delete)
module.exports= route