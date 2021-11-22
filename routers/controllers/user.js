const userModel = require("../../db/models/userSchema");

//login cotroller
const login = (req, res) => {
  const { email, password } = req.body;
  userModel.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password == user.password) {
        res.send({ message: "login sucess", user: user });
      } else {
        res.send({ message: "wrong credentials" });
      }
    } else {
      res.send("not register");
    }
  });
};



//signout
const signout = (req, res) => {
  res.clearCookie("t");
  res.json({ msg: "Signout successfully" });
}


//show all users
const getAllUsers = (req, res) => {
  userModel
    .find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
module.exports = { login, register , signout , getAllUsers};