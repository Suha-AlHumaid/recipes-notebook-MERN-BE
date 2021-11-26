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
          res.send({ message: "You have an account" }, {hi: err});
   
      
    });
  } catch (err) {
    // res.send({ message: "faild " }, {err: err});
    console.log(err)
    res.status(400).json({ message: err });
  }
};

//login cotroller
const login = (req, res) => {
  const { email, password } = req.body;
  userModel.findOne({ email: email },
     (err, user) => {
    if (user) {
      if (password === user.password) {
        res.status(400).json({ message: "Login Successfuly", user: user });
        // res.status(200).send({ message: "Login Successfuly", user: user })
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

// get user by id 
const getUser = (req, res) => {
  const { id } = req.params;
  userModel
  .findById({ _id: id })
  .then((result) => {
    res.send(result);
  })
  .catch((err) => {
    res.send(err);
  });
};

//Edit user by id "/user/:id", updatUser
const updatUser = (req, res) => {
  const { id } = req.params;
  const { userName, email, password} =
    req.body;

  if (userName) {
    userModel
      .findByIdAndUpdate({ _id: id }, { userName: userName }, { new: true })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  if (email) {
    userModel
      .findByIdAndUpdate({ _id: id }, { email: email }, { new: true })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  if (password) {
    userModel
      .findByIdAndUpdate(
        { _id: id },
        { password: password },
        { new: true }
      )
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.send(err ,{message: err.message});
      });
  }
};


module.exports = { login, register, getAllUsers, getUser, updatUser };
