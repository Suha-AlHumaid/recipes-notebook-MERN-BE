const express = require("express");
const user = require("../controllers/user");
const userRouter = express.Router();

//destructuring
const { login, register, signout ,getAllUsers} = require("../controllers/user");


//controllers
userRouter.post("/login", login);
userRouter.post("/register", register);
userRouter.post("/signout", signout);
userRouter.get("/all", getAllUsers);

module.exports = userRouter;
