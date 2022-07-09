const {postModel} = require("../models/models")
const deletePostController = (req, res) => {
    const postId = `${req.params.postId}`
    return postModel.findOneAndDelete({ _id: postId }, (err, post) => {
        return res.redirect("/")
    })
}

module.exports = {
    deletePostController
}