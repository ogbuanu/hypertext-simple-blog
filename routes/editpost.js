const editPost = require("express").Router()
const {editPostController} = require("../controllers/editPostController")
editPost.get("/editPost", editPostController)

exports.editPostRoute = editPost