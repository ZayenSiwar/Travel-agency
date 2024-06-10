const mongoose = require("mongoose")

const ProfileSchema= new mongoose.Schema({
 nomSite:{
        type:String,
      require:true,
        trim:true    
    },
   email:{
        type:String,
        require:true,
        trim:true    
    },
    telephone:{
        type:String,
        require:true,
        trim:true    
    },
    adresse:{
        type:String,
        require:true,
        trim:true    
    },
    motdepasseActuel:{
        type:String,
        require:true,
        trim:true    
    },
    nouveauMotdepasse:{
        type:String,
        require:true,
        trim:true    
    },
  Retaperlemotdepasse:{
        type:String,
        require:true,
        trim:true    
    }
    
})

module.exports = mongoose.model("Prfils",ProfileSchema)