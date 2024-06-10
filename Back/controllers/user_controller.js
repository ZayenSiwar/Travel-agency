const user_model = require("../models/user_model")
const config = require("config");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const { populate } = require("../models/user_model");



module.exports = {

 
    create: (req, res) => {
        const user = new user_model(req.body)
        user.save(req.body, (err, item) => {
            
            if (err) {
                res.status(406).json({ success: false, message: "failed to created", data: null })
            } else {
                res.status(201).json({ success: true, message: " created successfully", data: item })

            }
        })

    },
       
Updateuser:async(req,res)=>{
 try{
     const result = await  user_model.findByIdAndUpdate(req.params.id,{status:"true"})
   return res.send({status:true,resultat:result})
 }catch(err){
     return res.status(400).json({
         message:err.message,
         data:err
      })
 }
}
,
    getall: function (req, res) {
        user_model.find({}, (err, items) => {
            if (err) {
                res.status(406).json({ success: false, message: "cannot got", data: null })
            } else {
                res.status(201).json({ success: true, message: "list of ", data: items })
            }

        }).populate({path:"Rvoyage",model:"gRvoyage",populate:{path:"voyage",model:"gVoyage"}}).populate("gRomra")

       
    },
    getbyname: async (req, res) => {
        try {
            await user_model.find({ ref: req.query.ref }).exec((err, item) => {
                if (err) {
                    res.status(406).json({ success: false, message: "failed  ", data: null })
                } else {
                    res.status(200).json({ success: true, message: " success", data: item })
                }

            })
        } catch (error) {
            res.status(500).json(error.err)

        }
    },
    getbyid: async (req, res) => {
        try {
            await user_model.findById(req.params.id).populate({path:"Rvoyage",model:"gRvoyage",populate:{path:"voyage",model:"gVoyage"}}).populate({path:"Rvoiture",model:"gRvoiture",populate:{path:"voiture",model:"gVoiture"}}).populate("gRomra").populate({path:"gRExcursion",model:"gRExcursion",populate:{path:"excursion",model:"gExcursion"}})
            .populate({path:"Rhotel",model:"gRHotel",populate:{path:"hotel",model:"gHotel"}}).exec((err, item) => {
                if (err) {
                    res.status(406).json({ success: true, message: "failed id", data: null })
                } else {
                    res.status(200).json({ success: true, message: "id with success", data: item })
                }

            })
        } catch (err) {
            console.log(err)
            res.status(500).json(err.error)

        }
    },
    update: async (req, res) => {
        try {
            await user_model.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec((err, item) => {
                if (err) {
                    res.status(406).json({ success: false, message: "failed update" + err, data: null })
                } else {
                    res.status(200).json({ success: true, message: "success update", data: item })
                }

            })
        } catch (error) {
            res.status(500).json(error)

        }


    },

    delete: async (req, res) => {
        try {
            await user_model.findByIdAndDelete(req.params.id).exec((err, item) => {
                if (err) {
                    res.status(406).json({ success: false, message: "failed remove", data: null })
                } else {
                    res.status(201).json({ success: true, message: " success remove" })
                }
            })

        } catch (error) {
            res.status(500).json(error.err)
        }

    },
    //static how many users in this mounth
    getstats: async (req, res) => {
        const date = new Date()
        const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))
        //const prevYear =  new Date(new Date().setFullYear(lastYear.getFullYear()-1))
        try {
            const data = await user_model.aggregate([

                { $match: { createdAt: { $gte: lastYear } } },
                { $project: { month: { $month: "$createdAt" } } },
                { $group: { _id: "$month", Total: { $sum: 1 } } }
            ])

            res.status(201).json(data)
        } catch (error) {
            res.status(500).json(error)

        }



    }












}

