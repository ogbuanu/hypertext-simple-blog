const mongoose = require("mongoose")


const connectdb = () => {
    mongoose.connect("mongodb://localhost/hypertext")
}

module.exports = {
    connectdb
}