const express = require("express")
const arrangement_controller = require("../controllers/arrangement_controller")
const route = express.Router()



route.post("/create",arrangement_controller.create)
route.get("/getall",arrangement_controller.getall)
route.put("/update/:id",arrangement_controller.update)
route.get("/getbyname",arrangement_controller.getbyname)
route.get("/getbyid/:id",arrangement_controller.getbyid)
route.delete("/delete/:id",arrangement_controller.delete)
module.exports= route