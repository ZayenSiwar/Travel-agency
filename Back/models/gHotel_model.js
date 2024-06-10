const mongoose = require("mongoose")


const GallerySchema = new mongoose.Schema({
    name: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
  });



const gHotelSchema= new mongoose.Schema({
    nom:{
        type:String,
        required:true,
        trim:true    
    },
 
 
    description:{
        type:String,
    
        trim:true    
    },

    adresseHotel:{
        type:String,
        required:true,
        trim:true 
    },
    prix:{
        type:String,
        required:true,
        trim:true 
    },
    
    telephone:{
        type:String,
        required:true,
        trim:true    
    },
    map:{
        type:String,
      
        trim:true    
    },
   Composition:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"composition"
    }],
    user:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users"
    }],
    reservation:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"reservation"
    }],
    reservation:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"services"
    }],
    chambre:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"chambres"
    }],
    // arrangement:[{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"arrangement"
    // }],
    categorie:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"categories"
    }],
    temoignage:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"temoignage"
    }],
    
    galleries:[GallerySchema]
})

module.exports = mongoose.model("gHotel",gHotelSchema)