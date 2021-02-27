const express = require("express");
const roomModel = require("../models/room");
const roomsRouter = express.Router();

roomsRouter.use(express.json());

roomsRouter.get("/", async (req, res) => {
  const rooms = await roomModel.find({});
  res.status(200).send(rooms);
});

roomsRouter.get("/:id", async (req, res) => {
  const room = await roomModel.findOne({ _id: req.params.id });
  if (!room) {
    res.status(404).send(`Room with id ${req.params.id} was not found`);
  } else {
    res.status(200).send(room);
  }
});

roomsRouter.post("/", async (req, res) => {
  const room = new roomModel({ name: req.body.name, type: req.body.type });
  await room.save();
  res.status(200).send(room);
});

roomsRouter.delete("/:id", async (req, res) => {
  const room = await roomModel.findOneAndDelete({ _id: req.params.id });
  if (!room) {
    res.status(404).send(`Room with id ${req.params.id} was not found`);
  } else {
    res.status(200).send(room);
  }
});

roomsRouter.put("/:id", async (req, res) => {
  const room = await roomModel.findOneAndUpdate(
    { _id: req.params.id },
    req.body
  );
  if (!room) {
    res.status(404).send(`Room with id ${req.params.id} was not found`);
  } else {
    res.status(200).send(room);
  }
});

module.exports = roomsRouter;
