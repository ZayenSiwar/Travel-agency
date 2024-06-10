const mongoose = require("mongoose")

const gRexcursionSchema= new mongoose.Schema({
   
    datededepart:{
        type:String,
        trim:true    
    },
   duree:{
        type:String,
        trim:true    
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    excursion:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"gExcursion"
    },
    
},{timestamps:true})
module.exports = mongoose.model("gRExcursion",gRexcursionSchema)
