const mongoose = require("mongoose")

const chambreprixSchema= new mongoose.Schema({
Prixpourdeux:{
        type:String,
      required:true,
        trim:true    
    },
    Prixpoudrtrois:{
        type:String,
      required:true,
        trim:true    
    },
    Prixpourquatre:{
        type:String,
      required:true,
        trim:true    
    },
    Prixpourcinq:{
        type:String,
      required:true,
        trim:true    
    },
    Prixpoursix:{
        type:String,
      required:true,
        trim:true    
    },
    hotel:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"gHotel"
    }],
    chambre:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"chambres"
    },
})

module.exports = mongoose.model("chambreprix",chambreprixSchema)