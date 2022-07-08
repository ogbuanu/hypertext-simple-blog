const viewPost = require("express").Router()
const {viewPostController} = require("../controllers/viewPostController")
viewPost.get("/viewPost", viewPostController)

exports.viewPostRoute = viewPost