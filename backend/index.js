const express = require("express");
const cors = require("cors");
require("dotenv").config();

const PORT = 5000 | process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("Welcome to home page");
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT} ...`));
