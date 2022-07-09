const deleteComment = require("express").Router()
const { deleteCommentController}  =require("../controllers/deleteCommentController")
deleteComment.get("/deletecomment/:postId/:commentId", deleteCommentController)


module.exports = {
    deleteCommentRouter: deleteComment
}

