const { postModel } = require("../models/models")


const addCommentController = (req, res) => {
    const id = `${req.params.postId}`
    if (req.body && req.body.comment) {
        console.log(req.body);
        const comment = {
            body: req.body.comment,
            owner: req.session.user
        }
        postModel.findOneAndUpdate({ _id: id }, { $push: {comments: comment} }, function (err, sucess) {
            if (err) {
                console.log(err);

            }
            console.log(sucess);
        })   
        // const post = postModel.findOne({_id: id})
        
        return res.redirect(`/viewpost/${id}`)
    }
}
 
module.exports = {
    addCommentController
}