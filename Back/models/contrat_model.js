const mongoose = require("mongoose")
const baseOptions = {
    discriminatorKey: 'itemtype', // our discriminator key, could be anything
    collection: 'contrats', // the name of our collection
  };
const contratSchema= new mongoose.Schema({
  debutContrat:{
        type:String,
        trim:true    
    },
   finContrat:{
        type:String,       
        trim:true    
    },
    prix:{
      type:String,       
      trim:true    
  },
 
  hotel:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"gHotel"
},
    
},baseOptions,
{timestamps:true})

module.exports = mongoose.model("contrats",contratSchema)