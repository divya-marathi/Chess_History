const express = require("express")
const {  Login, SignUp } = require("../Controllers/userControllers")
const userRouter = express.Router()

userRouter.post("/signin", SignUp)

userRouter.post("/login", Login)

module.exports = { userRouter }
