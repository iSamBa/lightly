const express = require("express");
const ApiRouter = require("./routes/api");
const cors = require("cors");
require("dotenv").config();

const PORT = 5000 | process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", ApiRouter);
app.listen(PORT, () => console.log(`Server is listening on port ${PORT} ...`));
