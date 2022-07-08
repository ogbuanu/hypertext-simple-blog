const signin = require("express").Router()
const {signinController, signinControllerPost} = require("../controllers/signinController")
signin.get("/signin", signinController)
signin.post("/signin", signinControllerPost)
exports.signinRoute = signin