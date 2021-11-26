const express = require("express");
const user = require("../controllers/user");
const userRouter = express.Router();

//destructuring
const {
  login,
  register,
  getAllUsers,
  getUser,
  updatUser
} = require("../controllers/user");

//controllers
userRouter.post("/login", login);
userRouter.post("/register", register);
userRouter.get("/all", getAllUsers);
userRouter.get("/profile/:id", getUser);
userRouter.put("/updateUser/:id", updatUser);

// get user by id 


module.exports = userRouter;
