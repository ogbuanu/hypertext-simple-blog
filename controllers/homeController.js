
const homeController = (req, res) => { 
    const user = req.session.user || null
    res.render("index", {user})
}

module.exports = {
    homeController
}