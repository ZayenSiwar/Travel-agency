const express = require("express")
const reservationController = require("../controllers/reservation_controller")
const route = express.Router()

route.post("/create",reservationController.create)
route.get("/getall",reservationController.getall)

module.exports= route