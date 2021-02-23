const express = require("express");
const apiRouter = express.Router();

apiRouter.use(express.json());

apiRouter.get("/", (req, res) => {
  res.status(200).send("apiRouter : home route");
});

module.exports = apiRouter;
