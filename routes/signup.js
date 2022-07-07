const signup = require("express").Router()
const {signupController} = require("../controllers/signupController")
signup.get("/signup", signupController)

exports.signupRoute = signup