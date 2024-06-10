const express =require('express')
const cors=require("cors")
// const Grid = require('gridfs-stream');

const app = express()
const Database = require("./config/database")
const dotenv = require("dotenv")
const morgan = require("morgan")
const PORT = process.env.PORT 
const servicerouter = require ("./routers/service_router")
const voyagerouter = require ("./routers/voyage_router")
const gVoiturerouter = require ("./routers/gVoiture_router")
const gRvoiturerouter = require ("./routers/gRvoiture_router")
const gRvoyagerouter = require ("./routers/gRvoyage_router")
const gVoyagerouter = require("./routers/gVoyage_router")
const userRouter = require ("./routers/user_router")
const authrouter = require  ("./routers/auth_router")
const gOmrarouter = require("./routers/gOmra_router")
const gExcursionrouter =require("./routers/gExcursion_router")
const gHotelrouter = require("./routers/gHotel_router")
const Arrangementrouter = require("./routers/arrangement_router")
const compositionrouter = require("./routers/composition_router")
const contratrouter = require("./routers/contrat_router")
const contratNormal = require("./routers/contartNormal_router")
const contratPromorouter = require("./routers/contratPromo_router")
const contratEarlyrouter = require("./routers/contartEarlybooking_router")
const terificationrouter = require("./routers/terification_router")
const supplementaiirerouter = require("./routers/supplementaire_router")
const Temoignagerouter = require("./routers/temoignage_router")
const reservationrouter = require("./routers/reservation_router")
const chambreRouter= require("./routers/chambre_router")
const contactrouter = require("./routers/contact_router")
const categorieRouter=require("./routers/categorie_router")
const GrHotelrouter=require("./routers/gRhotel_router")
const parametrerouter = require("./routers/parametre_router")
const ChambrePrixrouter = require("./routers/chambrepric_router")
const Rexcursionrouter = require("./routers/gRexcursion_router")
const Romrarouter = require("./routers/gRomra_router")
const transfert = require("./routers/transfert_router")
  

app.use(cors());

app.use(express.json())
app.use(morgan("tiny"))


app.use("/Service",servicerouter), 
app.use("/voyages",voyagerouter),
app.use("/gVoiture",gVoiturerouter),
app.use("/gRvoiture",gRvoiturerouter),
app.use("/gRvoyage",gRvoyagerouter)
app.use("/gVoyage",gVoyagerouter)
app.use("/users",userRouter)
app.use("/auth",authrouter)
app.use("/gOmra",gOmrarouter)
app.use("/gExcursion",gExcursionrouter)
app.use("/gHotel",gHotelrouter)
app.use("/Arrangement",Arrangementrouter)
app.use("/Contrat",contratrouter)
app.use("/ContratPromo",contratPromorouter)
app.use("/ContratEarly",contratEarlyrouter)
app.use("/ContratNormal",contratNormal)
app.use("/supplementaire",supplementaiirerouter)
app.use("/Terification",terificationrouter)
app.use("/Composition",compositionrouter)
app.use("/Temoignage",Temoignagerouter)
app.use("/Reservation",reservationrouter)
app.use("/Contact",contactrouter)
app.use("/Chambre",chambreRouter)
app.use("/categorie",categorieRouter)
app.use("/grhotel",GrHotelrouter)
app.use("/parametre",parametrerouter)
app.use("/ChambrePrix",ChambrePrixrouter)
app.use("/Rexcursion",Rexcursionrouter)
app.use("/gRomra",Romrarouter)



app.get("/getImage/:img", function(req, res) {
    res.sendFile(__dirname + "/storages/" + req.params.img)
})

app.listen(PORT, ()=>{
    console.log(`server working on http://localhost:${PORT}`)
} )
