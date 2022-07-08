const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String
})
const CommentSchema = mongoose.Schema({
    body: String,
    owner: UserSchema
})
const PostSchema = mongoose.Schema({
    title: String,
    body: String,
    owner: UserSchema,
    comments: [CommentSchema]
})

module.exports = {
    userModel: mongoose.model("User", UserSchema),
    postModel: mongoose.model("Post", PostSchema)
}