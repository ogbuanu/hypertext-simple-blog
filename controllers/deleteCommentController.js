const { postModel } = require("../models/models");


const deleteCommentController = (req, res) => {

const id = `${req.params.postId}`
const commentId = `${req.params.commentId}`
  return  postModel.findOneAndUpdate({ _id: id }, { $pull: {comments: {_id: commentId}} }, function (err, sucess) {
        if (err) {
            console.log(err);

        }
        // console.log(sucess);
        return res.redirect(`/viewpost/${id}`)
    })   
    // const post = postModel.findOne({_id: id})
    
 
    }


module.exports = {
    deleteCommentController
}