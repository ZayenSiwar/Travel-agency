const mongoose = require("mongoose")

const reservationSchema= new mongoose.Schema({
   datededepart:{
        type:String,
        trim:true    
    },
   date_arrivee:{
        type:String,
        trim:true    
    },
    user:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }],
    Rvoiture:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"gRvoiture"
    }],
    
    voyage:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"gVoyage"
    }],
    gRomra:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"gRomra"
    }],
 

},{timestamps:true})

module.exports = mongoose.model("reservation",reservationSchema)
