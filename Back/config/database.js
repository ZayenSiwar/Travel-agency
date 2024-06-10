const mongoose = require("mongoose")
const DBase= process.env.DBase

const dotenv =  require("dotenv").config()






const Database = mongoose.connect(process.env.DBase ,{useNewUrlParser:true} ,function(err){

    if(!err){
    console.log("Mongodb connect successfully ")
    }else{
        console.log("failed connect to db",+err)
    }
})



module.exports= Database
