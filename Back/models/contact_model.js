const mongoose = require("mongoose")

const contactSchema= new mongoose.Schema({
 emailClient:{
        type:String,
      require:true,
        trim:true    
    },
   nomClient:{
        type:String,
        require:true,
        trim:true    
    },
    messageClient:{
        type:String,
        require:true,
        trim:true    
    },
    adresse:{
        type:String,
        require:true,
        trim:true    
    },
    num:{
        type:String,
        require:true,
        trim:true    
    },
   email:{
        type:String,
        require:true,
        trim:true    
    }
    
})

module.exports = mongoose.model("contacts",contactSchema)