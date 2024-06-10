const mongoose = require("mongoose")

const tarificationSchema= new mongoose.Schema({

   arrangement:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"arrangement"
    }],
    composition:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"composition"
    }],

   supplementaire:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"supplementaire"
    }],
 
    contrat:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"contrat"
    }],
  



},{timestamps:true})

module.exports = mongoose.model("tarification",tarificationSchema)