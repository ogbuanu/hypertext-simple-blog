const mongoose = require("mongoose")


const connectdb = () => {
    mongoose.connect("mongodb+srv://hypertext:hypertext@ikenna.49xzc.mongodb.net/hypertext")
}

module.exports = {
    connectdb
}