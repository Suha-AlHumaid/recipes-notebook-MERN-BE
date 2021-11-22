const mongoose = require("mongoose");
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const dotenv = require("dotenv");
dotenv.config();
const DB = process.env.DB;
const PASSWORD = process.env.PASSWORD;
mongoose.connect(`mongodb://localhost:27017/${DB}`, options).then(
  //  mongodb+srv://Suha:${PASSWORD}@cluster0.m6bb2.mongodb.net/${DB}?retryWrites=true&w=majority
  () => {
    console.log("DB Ready To Use");
  },
  (err) => {
    console.log(err);
  }
);
