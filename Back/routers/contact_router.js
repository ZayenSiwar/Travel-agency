const express = require("express")
const contact_Controller = require("../controllers/contact_controller")
const route = express.Router() 


route.post("/create",contact_Controller.create)
route.get("/getall",contact_Controller.getall)
route.put("/update/:id",contact_Controller.update)
route.get("/getbyname",contact_Controller.getbyname)
route.get("/getbyid/:id",contact_Controller.getbyid)
route.delete("/delete/:id",contact_Controller.delete)
module.exports= route
