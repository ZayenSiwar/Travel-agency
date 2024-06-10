const express = require("express")
const gRvoyage_Controller = require("../controllers/gRvoyage_controller")
const route = express.Router()
const upload = require("../middleware/uploadFile")

route.post("/create",upload.single("photo"),gRvoyage_Controller.create)
route.get("/getall",gRvoyage_Controller.getall)
route.put("/update/:id",gRvoyage_Controller.update)
route.get("/getbyname",gRvoyage_Controller.getbyname)
route.get("/getbyid/:id",gRvoyage_Controller.getbyid)
route.delete("/delete/:id",gRvoyage_Controller.delete)
module.exports= route