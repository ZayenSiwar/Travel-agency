const mongoose = require("mongoose")

const serviceSchema= new mongoose.Schema({

    hotel:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"gHotel"
    }],
   
    voiture:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"gVoiture"
    }],
    omra:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"gOmra"
    }],
    voyage:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"gVoyage"
    }],
    
 
},{timestamps:true})
module.exports = mongoose.model("services",serviceSchema)