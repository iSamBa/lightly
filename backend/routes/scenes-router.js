const express = require("express");
const scenesRouter = express.Router();

scenesRouter.use(express.json());

scenesRouter.get("/", (req, res) => {
  res.status(200).send("Scenes home route");
});

module.exports = scenesRouter;
