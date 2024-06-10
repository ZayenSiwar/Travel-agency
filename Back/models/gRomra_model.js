const mongoose = require("mongoose")

const gRomraSchema= new mongoose.Schema({
    nom: {
        type:String,
        required:true,
        trim:true 
    },
    datededepart:{
        type:String,
        trim:true    
    },
    datederetour:{
        type:String,
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
    
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    omra:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"gOmra"
    },
    
},{timestamps:true})
module.exports = mongoose.model("gRomra",gRomraSchema)
