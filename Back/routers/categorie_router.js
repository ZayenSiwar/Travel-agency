const express = require("express")
const categorie_Controller = require("../controllers/categorie_controller")
const route = express.Router()



route.post("/create",categorie_Controller.create)
route.get("/getall", categorie_Controller.getall)
route.put("/update/:id", categorie_Controller.update)
route.get("/getbyname", categorie_Controller.getbyname)
route.get("/getbyid/:id", categorie_Controller.getbyid)
route.delete("/delete/:id", categorie_Controller.delete)
module.exports= route
