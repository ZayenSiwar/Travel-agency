const mongoose = require("mongoose")

const voyageSchema = new mongoose.Schema({

Name:{
    type:String,
    required:true,
    trim:true,
},
Description:{
    type:String,
    required:true,
    trim:true,
},
Type:{
    type:String,
    required:true,
    trim:true,
},
Price:{
    type:String,
    required:true,
    trim:true,
},
Category:{
    type:String,
    required:true,
    trim:true,
},
Service:{
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"services"
    
    }
}



},{timestamps:true})

module.exports= mongoose.model("voyages",voyageSchema)