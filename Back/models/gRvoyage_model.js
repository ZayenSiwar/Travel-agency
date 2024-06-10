const mongoose = require("mongoose")

const gRVoyageSchema= new mongoose.Schema({
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
    voyage:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"gVoyage"
    },

 
},{timestamps:true})
module.exports = mongoose.model("gRvoyage",gRVoyageSchema)
