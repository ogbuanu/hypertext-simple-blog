const signup = require("express").Router()
const {signupController, signupControllerPost} = require("../controllers/signupController")
signup.get("/signup", signupController)
signup.post("/signup", signupControllerPost)

exports.signupRoute = signup