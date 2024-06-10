const mongoose = require("mongoose")

const categorieSchema= new mongoose.Schema({
nombreEtoile:{
        type:String,
      required:true,
        trim:true    
    },
    hotel:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"gHotel"
    }],
})

module.exports = mongoose.model("categories",categorieSchema)