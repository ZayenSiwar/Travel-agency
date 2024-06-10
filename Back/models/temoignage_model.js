const mongoose = require("mongoose")

const temoignageSchema= new mongoose.Schema({
   nomClient:{
        type:String,
      required:true,
        trim:true    
    },
    description:{
        type:String,
       required:true,
        trim:true    
    },
    avis:{
        type:String,
        trim:true    
    },
    email:{
        type:String,
       required:true,
        trim:true    
    },
    hotel_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"gHotel"
    },

    
    
} ,  
 {
    timestamps:true,
}
)

module.exports = mongoose.model("temoignage",temoignageSchema)