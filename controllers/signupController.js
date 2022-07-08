const {userModel} = require("../models/models")
const signupController = (req, res) => { 
    res.render("pages/auth/signup")
}
const signupControllerPost = (req, res) => {
    if (req.body.username && req.body.email && req.body.password) {
        
        return userModel.find({ username: req.body.username }, (err,user) => {
        if (user.length) {
            return res.redirect("/auth/signup?message=alreadyExists")
            }
            
            const newUser = new userModel(req.body)
            newUser.save()
            return res.redirect("/auth/signin")
    })
        
    }
    res.redirect("/auth/signup")
}

module.exports = {
    signupController,
    signupControllerPost
}