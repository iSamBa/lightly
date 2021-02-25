const express = require("express");
const hubsRouter = express.Router();

hubsRouter.use(express.json());

hubsRouter.get("/", (req, res) => {
  res.status(200).send("Hubs home route");
});

module.exports = hubsRouter;
