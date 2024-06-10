const mongoose = require("mongoose")
const GallerySchema = new mongoose.Schema({
    name: {
      type: String,
      trim: true,
     
    },
    description: {
      type: String,
      trim: true,
 
    },
  });

const gExcursionSchema= new mongoose.Schema({

prix:{
    type:String,
    required:true,
    trim:true  
},
description:{
    type:String,
    required:true,
    trim:true  
},
duree:{
    type:String,
    required:true,
    trim:true  
},

destination:{
    type:String,
        required:true,
        trim:true  
},
date:{
    type:String,
        required:true,
        trim:true  
},

nbrpersonne:{
    type:String,
        required:true,
        trim:true  
},

reservation:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"reservation"
}],
galleries:[GallerySchema]
},{timestamps:true})

 module.exports = mongoose.model("gExcursion",gExcursionSchema)