const {userModel} = require("../models/models")
const signupController = (req, res) => { 
    const message = req.query.message || null
    res.render("pages/auth/signup", {message})
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
    res.redirect("/auth/signup?message=error")
}

module.exports = {
    signupController,
    signupControllerPost
}