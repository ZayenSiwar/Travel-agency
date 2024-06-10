const mongoose = require("mongoose")

const terificationSchema= new mongoose.Schema({
   prixTOtal:{
        type:String,
      
        trim:true    
    },
    duree:{
        type:String,
       
        trim:true    
    },
   
    
})

module.exports = mongoose.model("terification",terificationSchema)