const mongoose = require("mongoose")

const contratModel = require("./contrat_model")
const contratPromoSchema= new mongoose.Schema({
  debutPromo:{
        type:String,
      
        trim:true    
    },
   finPromo:{
        type:String,
       
        trim:true    
    },
   
    
})

const contratPromo = contratModel.discriminator("contratPromo",contratPromoSchema)
module.exports = mongoose.model("contratPromo")