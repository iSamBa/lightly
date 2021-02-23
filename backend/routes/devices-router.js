const express = require("express");
const devicesRouter = express.Router();

devicesRouter.use(express.json());

devicesRouter.get("/", (req, res) => {
  res.status(200).send("devices home route");
});

module.exports = devicesRouter;
