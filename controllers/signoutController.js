const signoutController = (req, res) => {
    
    req.session.destroy()
    res.redirect("/auth/signin")
}

module.exports = {
    signoutController
} 