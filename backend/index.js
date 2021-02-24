const express = require("express");
const router = require("./routes/router");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect("mongodb://localhost:27017/lightly", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PORT = 5000 | process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", router);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT} ...`));
