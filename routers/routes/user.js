const express = require("express");
const user = require("../controllers/user");
const userRouter = express.Router();

//destructuring
const { login, register, signOut ,getAllUsers} = require("../controllers/user");


//controllers
userRouter.post("/login", login);
userRouter.post("/register", register);
userRouter.post("/signout", signOut);
userRouter.get("/all", getAllUsers);

module.exports = userRouter;
