const signout = require("express").Router()
const {signoutController} = require("../controllers/signoutController")


signout.get("/signout", signoutController)

module.exports = {
signoutRoute: signout
}