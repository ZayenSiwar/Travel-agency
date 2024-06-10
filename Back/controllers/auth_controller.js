const { json } = require("express/lib/response")
const usermodel = require("../models/user_model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const res = require("express/lib/response")
const JWT_SECRET = process.env.JWT_SECRET
const RT_SECRET = process.env.RT_SECRET


let RefreshTokens = []

//generate access token
const generateAccessToken = function (user) {
    return jwt.sign({ id: user._id, isAdmin: user.isAdmin }, JWT_SECRET, { expiresIn: "7h" })
}

//generate refrech token
const generateRefreshToken = function (user) {
    return jwt.sign({ id: user._id, isAdmin: user.isAdmin }, RT_SECRET, { expiresIn: "20h" })
}

module.exports = {
    login: (req, res) => {
        usermodel.findOne({ email: req.body.email }, (err, user) => {
            if (err) {
                res.status(406).json({ success: false, message: "err login" })
            } else {
                if (user) {

                    console.log(req.body.motdepasse, user.motdepasse);
                    if (bcrypt.compareSync(req.body.motdepasse, user.motdepasse)) {

                        const AccessToken = generateAccessToken(user)
                        const RefreshToken = generateRefreshToken(user)
                        RefreshTokens.push(RefreshToken)

                        res.status(201).json({
                             success: true,
                             message: " user found",
                             data: user, 
                             AccessToken,
                             RefreshToken })
                    } else {
                        res.status(406).json({ message: "password not found" })
                    }

                } else {
                    res.status(406).json({ message: "email incorrect" })
                }
            }

        })

    },
    RefreshToken: (req, res, next) => {
        const RefreshToken = req.body.token

        if (!RefreshToken) return res.status(401).json({ message: "u r not authentificated" })
        if (!RefreshTokens.includes(RefreshToken)) {
            return res.status(403).json({ message: "refresh token is not valid " })
        }
        jwt.verify(RefreshToken, RT_SECRET, (err, user) => {
            err && console.log(err)
            RefreshTokens = RefreshTokens.filter((token) => token !== RefreshToken)//***token */

            const newAccessToken = generateAccessToken(user)
            const newRefreshToken = generateRefreshToken(user)
            RefreshTokens.push(newRefreshToken)
            res.status(200).json({ AccessToken: newAccessToken, RefreshToken: newRefreshToken })
        })


    },
    logout: (req, res, next) => {
        const RefreshToken = req.body.token
        RefreshTokens = RefreshTokens.filter((token) => token !== RefreshToken)
        res.status(200).json("u'r logout ")
    }


}