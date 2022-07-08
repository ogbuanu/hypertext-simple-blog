const express = require("express")
const {homeRoute} = require("../routes/home")

const app = express()

app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(homeRoute)


app.listen(3000)