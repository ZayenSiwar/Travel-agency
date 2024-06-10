const mongoose = require("mongoose")

const arrangementSchema= new mongoose.Schema({
  aeroport:{
        type:String,
    
        trim:true    
    },

    adresse:{
        type:String,
        trim:true    
    },
    adresse:{
        type:String,
        trim:true    
    },   
  
})

module.exports = mongoose.model("arrangement",arrangementSchema)