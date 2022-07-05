const home = require("express").Router()
const {homeController} = require("../controllers/homeController")
home.get("/", homeController)

exports.homeRoute = home