const mongoose = require("mongoose")

const gOmraSchema= new mongoose.Schema({



nom: {
    type:String,
    required:true,
    trim:true 
},

datededepart: {
    type:String,
    required:true,
    trim:true 
},
datederetour:{
    type:String,
    required:true,
    trim:true 
},
email:{
    type:String,
    required:true,
    trim:true 
},
ville:{
    type:String,
    required:true,
    trim:true 
},

duree: {
    type:String,
    required:true,
    trim:true 
},
numero: {
    type:String,
    required:true,
    trim:true 
},
// description: {
//     type:String,
//     required:true,
//     trim:true 
// },

prix: {
    type:String,
    required:true,
    trim:true 
},

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
},{timestamps:true})
module.exports = mongoose.model("gOmra",gOmraSchema)
