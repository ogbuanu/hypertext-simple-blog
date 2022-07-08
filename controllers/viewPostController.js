const {postModel} = require("../models/models")

const viewPostController = (req, res) => {
    const user = req.session.user || null
    const id = `${req.params.id}`
    return postModel.findById({_id: id}, (err, post) => {
        if (err) {
            throw err
        }
        
        const postContent = post
        return res.render("pages/viewPost", {post: postContent, user})
    })
} 

module.exports = {
    viewPostController
}