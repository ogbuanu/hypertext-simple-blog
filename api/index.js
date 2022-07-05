const express = require("express")
const {homeRoute} = require("../routes/home")

const app = express()

app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(homeRoute)

app.get("/", (req, res) => {
    res.send("done!")
})

app.listen(3000)