const {postModel} = require("../models/models")
const homeController = (req, res) => { 
    const user = req.session.user || null
    postModel.find({}, (err, post) => {
        if (err) {
            throw err
        }
        
        res.render("index", {user, post})
        })

}

module.exports = {
    homeController
}