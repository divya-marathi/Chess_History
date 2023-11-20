const express = require("express");
const { Signin, Login } = require("../Controllers/userControllers");
const userRouter = express.Router();

userRouter.post("/signin", Signin);

userRouter.post("/login", Login);

module.exports = { userRouter };
