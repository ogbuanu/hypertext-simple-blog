const { postModel } = require("../models/models")

const editPostController = (req, res) => {
    const user = req.session.user || null
    const id = `${req.params.postId}`
    return postModel.findById({ _id: id }, (err, post) => {
        // console.log(post);
        res.render("pages/editPost",{user, post})
    })
}

const editPostControllerPost = (req, res) => {
    // console.log("edit: ", req.body);
    const id = `${req.params.postId}`
    return postModel.findOneAndUpdate({ _id: id }, req.body, (err, post) => {
        if (err) {
            throw err
        }

        res.redirect(`/viewpost/${req.params.postId}`)
    })
}

module.exports = {
    editPostController,
    editPostControllerPost
}