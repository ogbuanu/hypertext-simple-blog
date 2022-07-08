const {postModel} = require("../models/models")
const createpostController = (req, res) => { 
    const user = req.session.user || null
    res.render("pages/createpost", {user})
}

const createpostControllerPost = (req, res) => {
    if (req.body && req.body.title && req.body.post) {
        const newPost = new postModel({
            title: req.body.title,
            body: req.body.post,
            owner: req.session.user
        })

        newPost.save()
        return res.redirect("/")
    }
    return res.redirect("/createpost?message=error")
}

module.exports = {
    createpostController,
    createpostControllerPost
}