const comment = require("express").Router()
const {addCommentController} = require("../controllers/addCommentController")

comment.post("/add-comment/:postId", addCommentController)

module.exports = {
    commentRoute: comment
}