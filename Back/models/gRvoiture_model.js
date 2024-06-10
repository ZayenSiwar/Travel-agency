const mongoose = require("mongoose")

const gRVoitureSchema= new mongoose.Schema({

    datededepart:{
        type:String,
        trim:true    
    },
   date_arrivee:{
        type:String,
        trim:true    
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    voiture:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"gVoiture"
    },
    
},{timestamps:true})
module.exports = mongoose.model("gRvoiture",gRVoitureSchema)
