const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./db/db");
dotenv.config();

const PORT = process.env.PORT;

//built-in level middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

////////////////////////

// User 
const userRouter = require("./routers/routes/user");
app.use("/user", userRouter);

// Recipe
const recipeRouter = require("./routers/routes/recipe");
app.use("/", recipeRouter);

//////////////////////////

app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});
