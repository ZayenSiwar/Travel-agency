const mongoose = require("mongoose")

const chambreSchema= new mongoose.Schema({
 nom:{
        type:String,
      required:true,
        trim:true    
    },
 nombredelit:{
        type:String,
      required:true,
        trim:true    
    },

   surface:{
        type:String,
      required:true,
        trim:true    
    },
    salledebain:{
        type:String,
      required:true,
        trim:true    
    },
    image:{
        type:String,
       required:true,
        trim:true    
    },
    prix:{
        type:String,
       required:true,
        trim:true    
    },
   

    hotel:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"gHotel"
    },
   chambrePrix:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:"chambreprix"
  }],
   arrangement:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"arrangement"
    },

    supplimentaire:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"supplementaire"
  },
})

module.exports = mongoose.model("chambres",chambreSchema)