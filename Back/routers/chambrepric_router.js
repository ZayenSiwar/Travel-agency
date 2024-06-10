const express = require("express")
const prix_Controller = require("../controllers/chambreprix_controller")
const route = express.Router()



route.post("/create",prix_Controller.create)
route.get("/getall", prix_Controller.getall)
route.put("/update/:id", prix_Controller.update)
route.get("/getbyname", prix_Controller.getbyname)
route.get("/getbyid/:id", prix_Controller.getbyid)
route.delete("/delete/:id", prix_Controller.delete)
module.exports= route
