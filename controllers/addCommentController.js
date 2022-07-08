const { postModel } = require("../models/models")


const addCommentController = (req, res) => {
    const id = `${req.params.postId}`
    if (req.body && req.body.comment) {
    
        const comment = {
            body: req.body.comment,
            owner: req.session.user
        }
        console.log(comment);
   
        // const post = postModel.findOne({ _id: id })
        // post.comments.push(comment)
        // post.save()
        return res.redirect(`/viewpost/${id}`)
    }
}
 
module.exports = {
    addCommentController
}