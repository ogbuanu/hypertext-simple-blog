const {userModel} = require("../models/models")
const signinController = (req, res) => { 
    const message = req.query.message || null
    res.render("pages/auth/signin", {message})
}



const signinControllerPost = (req, res) => {
    if (req.body.username &&  req.body.password) {
        
        return userModel.find({ username: req.body.username }, (err,user) => {
            if (err) {
                console.log(err);
               }
            // console.log(user);
            if (user.length) {
                if (user[0].password != req.body.password) {
                    return res.redirect("/auth/signin?message=doesNotMatch")
                }
                else {
                    req.session.user = user[0]
                    return res.redirect("/")
                }
            }
            else { 
                return res.redirect("/auth/signin?message=doesNotMatch")
            }

            
            
            
    })
        
    }
    res.redirect("/auth/signin")
}

module.exports = {
    signinController,
    signinControllerPost
}


