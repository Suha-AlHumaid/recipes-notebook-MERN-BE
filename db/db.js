const mongoose = require("mongoose");
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const dotenv = require("dotenv");
dotenv.config();
const DB = process.env.DB;
const PASSWORD = process.env.PASSWORD;
// mongoose.connect(`mongodb://localhost:27017/${DB}`, options).then(
  mongoose.connect(`mongodb+srv://Suha:${PASSWORD}@cluster0.almml.mongodb.net/${DB}?retryWrites=true&w=majority`, options).then(
  () => {
    console.log("DB Ready To Use");
  },
  (err) => {
    console.log(err);
  }
);
