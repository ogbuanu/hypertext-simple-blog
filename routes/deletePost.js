const deletePost = require("express").Router()
const { deletePostController } = require("../controllers/deletePostController")

deletePost.get("/deletePost/:postId", deletePostController)

module.exports = {
    deletePostRouter: deletePost
}