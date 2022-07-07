const createpost = require("express").Router()
const {createpostController} = require("../controllers/createpostController")
createpost.get("/createpost", createpostController)

exports.createpostRoute = createpost