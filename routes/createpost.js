const createpost = require("express").Router()
const {createpostController, createpostControllerPost} = require("../controllers/createpostController")
createpost.get("/createpost", createpostController)
createpost.post("/createpost", createpostControllerPost)
exports.createpostRoute = createpost