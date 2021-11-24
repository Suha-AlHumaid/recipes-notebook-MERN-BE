const userModel = require("../../db/models/userSchema");

//register controller
const register = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const user = new userModel({ userName, email, password });
    await user.save();
    userModel.findOne({ email: email }, (err, user) => {
      if (user) {
        res.send({ message: "Login Successfuly", user: user });
      }
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//login cotroller
const login = (req, res) => {
  const { email, password } = req.body;
  userModel.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "Login Successfuly", user: user });
      } else {
        res.send({ message: "Invalid Password" });
      }
    } else {
      res.send({ message:"You Do not have an account"});
    }
  });
};


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
module.exports = { login, register, getAllUsers };
