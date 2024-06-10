const mongoose = require("mongoose")

const arrangementSchema= new mongoose.Schema({
   type:{
        type:String,
      
        trim:true    
    },

    prix:{
        type:String,
        trim:true    
    },
      
    // hotel:[{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"gHotel"
    // }],
})

module.exports = mongoose.model("arrangement",arrangementSchema)