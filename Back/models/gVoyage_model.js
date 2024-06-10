const mongoose = require("mongoose")

const gVoyageSchema= new mongoose.Schema({
nom:{
    type:String,
    required:true,
    trim:true  
},

destination:{
    type:String,
        required:true,
        trim:true  
},
paysdedepart:{
    type:String,
        required:true,
        trim:true  
},
paysarrivage:{
    type:String,
        required:true,
        trim:true  
},

prix:{
    type:String,
        required:true,
        trim:true  
},

description:{
    type:String,
      
        trim:true  
},

caracteristique:{
    type:String,
      
        trim:true  
},

image:{
    type:String,
 
        trim:true  
},



},{timestamps:true})
 module.exports = mongoose.model("gVoyage",gVoyageSchema)