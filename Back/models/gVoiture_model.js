const mongoose = require("mongoose")

const gVoitureSchema= new mongoose.Schema({
nom:{
    type:String,
    required:true,
    trim:true  
},
image:{
    type:String,
        // required:true        
},
modele:{
    type:String,
        required:true,
        trim:true  
},
type:{
    type:String,
        required:true,
        trim:true  
},
description:{
    type:String,
        trim:true  
},
detailles:{
    type:String,
        trim:true  
},
prix:{
    type:String,
    required:true,
        trim:true  
},
place:{
       type:String,
       required:true,
        trim:true ,
},
baggage:{
    type:String,
    required:true,
        trim:true  
},
porte:{
    type:String,
    required:true,
        trim:true  
},
climatisation:{
    type:String,
    default:false,
      
},
essence:{
    type:String,
    required:true,
        trim:true  
},
boiteManuelle:{
    type:String,
    trim:true  

},
user:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Users"
}],



},{timestamps:true})
 module.exports = mongoose.model("gVoiture",gVoitureSchema)