

const sessionAuthorization = (req, res, next) => {
    if (!req.session.user) {
      return  res.redirect("/auth/signin")
    }

    next()
}

const redirectIfLoggedIn = (req, res, next) => {
    if (req.session.user) {
       return res.redirect("/")
    }
    next()
}


module.exports = {
    sessionAuthorization,
    redirectIfLoggedIn
}