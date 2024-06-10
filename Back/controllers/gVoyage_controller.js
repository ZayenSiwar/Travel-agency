const gVoyagemodel = require("../models/gVoyage_model")



module.exports = {
    create: async (req, res) => {
        req.body.image = req.file.filename
        console.log(req.file)
       
        try {
            const voyage = new gVoyagemodel(req.body)
            await voyage.save(req.body, (err, item) => {
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


    getall: async (req, res) => {
        try {


            await gVoyagemodel.find({}).exec((err, items) => {
                if (err) {
                    res.status(406).json({ success: false, message: "failed cration ", data: null })
                } else {
                    res.status(201).json({ success: true, message: "created with success", data: items })
                }
            })
        } catch (error) {
            res.status(500).json(error)
        }


    },
    getbyid: async (req, res) => {
        try {
            await gVoyagemodel.findById(req.params.id).exec((err, item) => {

                if (err) {
                    res.status(406).json({ success: false, message: "failed cration ", data: null })
                } else {

                    res.status(201).json({ success: true, message: "created with success", data: item })
                }

            })

        } catch (err) {
            res.status(500).json(err.error)
        }
    },
    getbyname: async (req, res) => {
        try {
            await gVoyagemodel.findOne({ nom: req.query.nom }).exec((err, item) => {
                if (err) {
                    res.status(406).json({ success: false, message: "failed  ", data: null })
                } else {
                    res.status(201).json({ success: true, message: " success", data: item })
                }

            })
        } catch (error) {
            res.status(500).json(error.err)

        }
    },
    update: async (req, res) => {
        try {
            await gVoyagemodel.findOneAndUpdate(req.params.id, req.body).exec((err, item) => {
                if (err) {
                    res.status(406).json({ success: false, message: "failed  update ", data: null })
                } else {
                    res.status(201).json({ success: true, message: " success update", data: item })
                }
            })

        } catch (err) {
            res.status(500).json(error.err)
        }
    },
    delete: async (req, res) => {
        try {
            await gVoyagemodel.findByIdAndDelete(req.params.id).exec((err, item) => {
                if (err) {
                    res.status(406).json({ success: false, message: "failed  remove ", data: null })
                } else {
                    res.status(201).json({ success: true, message: " success remove", data: item })
                }
            })

        } catch (error) {
            res.status(500).json(error.err)
        }

    }

}