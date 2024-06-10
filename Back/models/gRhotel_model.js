const mongoose = require("mongoose")

const gRhotelSchema= new mongoose.Schema({
   
    prixTotal:{
        type:String,
        trim:true    
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    hotel:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"gHotel"
    },
    
},{timestamps:true})
module.exports = mongoose.model("gRHotel",gRhotelSchema)
