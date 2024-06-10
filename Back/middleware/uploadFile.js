const multer = require("multer")
const Storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './storages')
    },
    filename: function (req, file, cb) {
        const ext = file.mimetype.split("/")[1];
        cb(null, `${file.fieldname}-${Date.now()}.${ext}`);
    }
})
const upload = multer({
    storage: Storage,

    limits: { _fileSize: 1024 * 1024 * 1024 * 10 },

    fileFilter: function (req, file, cb) {
        if (file.mimetype === "image/jpg" ||
            file.mimetype === "image/jpeg" ||
            file.mimetype === "image/png" ||
            file.mimetype === "image/jfif" ||
            file.mimetype === "video/mp4" ||
            "application/pdf") {
            cb(null, true)
        } else {
            cb(new Error("Image uploaded is not of type jpg/jpeg/png or jfif.....", false))
        }
    }
})
module.exports = upload