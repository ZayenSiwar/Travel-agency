const gVoitureModel = require("../models/gVoiture_model")
const bcrypt = require("bcrypt")


module.exports = {
  
    create: async (req, res) => {

        console.log(req.file)
        req.body.image = req.file.filename
        try {
            const voiture = new gVoitureModel(req.body)
            await voiture.save(req.body, (err, item) => {
                if (err) {
                    res.status(406).json({ success: false, message: "failed ", data: null })
                } else {
                    res.status(200).json({ success: true, message: " with success", data: item })
                }
            })
        } catch (err) {
            res.status(500).json(err)
        }
    },


    getall: function (req, res) {
        gVoitureModel.find({}, (err, items) => {
            if (err) {
                res.status(406).json({ success: false, message: "cannot got all cars", data: null })
            } else {
                res.status(201).json({ success: true, message: "list of cars", data: items })
            }

        })

    },
    update: function (req, res) {

        gVoitureModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, item) {
            if (err) {
                res.status(406).json({ success: false, message: "cannot update", data: null })
            } else {
                res.status(201).json({ success: true, message: "the car is  updated ", data: item })
            }
        })

    },
    getbyname: function (req, res) {
        gVoitureModel.find({ name: req.query.name }, function (err, item) {

            if (err) {
                res.status(406).json({ success: false, message: "cannot get the name ", data: null })
            } else {
                res.status(201).json({ success: true, message: " the car  getted with name ", data: item })
            }
        })
    },
    getbyid: function (req, res) {
        gVoitureModel.findById(req.params.id, function (err, item) {

            if (err) {
                res.status(406).json({ success: false, message: "cannot founded id  ", data: null })
            } else {
                res.status(201).json({ success: true, message: "the car with id ", data: item })
            }
        })
    },
    delete: function (req, res) {
        gVoitureModel.findByIdAndRemove(req.params.id, function (err, item) {
            if (err) {
                res.status(406).json({ success: false, message: "failed deleted car  by id ", data: null })
            } else {
                res.status(201).json({ success: true, message: "the car  deleted ", data: item })
            }
        })
    }



}