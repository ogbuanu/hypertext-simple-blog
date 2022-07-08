const viewPost = require("express").Router()
const {viewPostController} = require("../controllers/viewPostController")
viewPost.get("/viewPost/:id", viewPostController)

exports.viewPostRoute = viewPost