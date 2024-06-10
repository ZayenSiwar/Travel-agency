const mongoose = require("mongoose")

const contratModel = require("./contrat_model")
const contratEarlySchema= new mongoose.Schema({
  debutreservation:{
        type:String,
      
        trim:true    
    },
   finreservation:{
        type:String,
       
        trim:true    
    },


})
const Contratearly = contratModel.discriminator("Contratearly",contratEarlySchema)
module.exports = mongoose.model("Contratearly")