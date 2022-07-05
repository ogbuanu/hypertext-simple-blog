const express = require("express")
const {homeRoute} = require("../routes/home")

const app = express()

<<<<<<< HEAD
app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(homeRoute)

=======
app.get("/", (req, res) => {
    res.send("done!")
})
>>>>>>> dda04b1fd7e97b32a3543c529f311077c4a255b6

app.listen(3000)