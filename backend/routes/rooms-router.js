const express = require("express");
const roomsRouter = express.Router();

roomsRouter.use(express.json());

roomsRouter.get("/", (req, res) => {
  res.status(200).send("Rooms home route");
});

module.exports = roomsRouter;
