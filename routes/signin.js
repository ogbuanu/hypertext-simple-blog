const signin = require("express").Router()
const {signinController} = require("../controllers/signinController")
signin.get("/signin", signinController)

exports.signinRoute = signin