const mongoose = require("mongoose")

const validator = require("validator")

const bcrypt = require("bcrypt")

saltRounds = 10


const UserSchema = new mongoose.Schema({

    nom: {
        type: String,
        required: true,
        trim: true
    },
    prenom: {
        type: String,
        required: true,
        trim: true
    },
  
    email: {
        type: String,
        required: true,
        trim: true,
        validate: [validator.isEmail, "pls enter a valid email"]

    },
    motdepasse: {
        type: String,
        required: true,
        trim: true,
    },
    num: {
        type: String,
        // required: true,
        trim: true

    },
    image: {
        type: String,


    },
    
    isAdmin: {
        type: Boolean,
        default: false
    },
    status: {
        type: Boolean,
    },
    Rvoiture: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "gRvoiture"
    }],
    Rvoyage: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "gRvoyage"
    }],



    Rhotel: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "gRHotel"
    }],
    reservation:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"reservation"
    }],
    gRExcursion:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"gRExcursion"
  
    }],
    gRomra:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"gRomra"
    }],
},
    { timestamps: true })

UserSchema.pre("save", function (next) {
    this.motdepasse = bcrypt.hashSync(this.motdepasse, saltRounds)
     next()

})
module.exports = mongoose.model("Users", UserSchema)
