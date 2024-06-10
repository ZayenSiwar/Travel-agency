const mongoose = require("mongoose")

const compositionSchema= new mongoose.Schema({
 adulte:{
        type:String,
      required:true,
        trim:true    
    },
   enfant:{
        type:String,
       required:true,
        trim:true    
    },
   
    hotel: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "gHotel"
  }],
})

module.exports = mongoose.model("composition",compositionSchema)