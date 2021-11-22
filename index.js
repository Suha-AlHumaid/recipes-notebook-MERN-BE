const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");

dotenv.config();

const PORT = process.env.PORT;

//built-in level middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

////////////////////////



//////////////////////////

app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});
