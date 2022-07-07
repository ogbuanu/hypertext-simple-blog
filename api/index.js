const express = require("express")
const {homeRoute} = require("../routes/home")
const { signupRoute } = require("../routes/signup")
const {createpostRoute} = require("../routes/createpost")
const app = express()

app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(homeRoute)
app.use(signupRoute)
app.use(createpostRoute)

app.get("/", (req, res) => {
    res.send("done!")
})

app.get("/signup", (req, res) => {
    res.send("done!")
})

app.get("/createpost", (req, res) => {
    res.send("done!")
})
app.listen(3000)
