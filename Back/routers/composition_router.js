const express = require("express")
const composition_Controller = require("../controllers/composition_controller")
const route = express.Router()



route.post("/create",composition_Controller.create)
route.get("/getall",composition_Controller.getall)
route.put("/update/:id",composition_Controller.update)
route.get("/getbyname",composition_Controller.getbyname)
route.get("/getbyid/:id",composition_Controller.getbyid)
route.delete("/delete/:id",composition_Controller.delete)
module.exports= route
