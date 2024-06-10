const mongoose = require("mongoose")
const contratModel = require("./contrat_model")
const contratNormalSchema= new mongoose.Schema({
 
   
    
})

const contratnormal = contratModel.discriminator("contratnormal",contratNormalSchema)
module.exports = mongoose.model("contratnormal")