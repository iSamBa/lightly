const express = require("express");
const hubsRouter = express.Router();
const hubModel = require("../models/hub");

hubsRouter.use(express.json());

hubsRouter.get("/", async (req, res) => {
  const hubs = await hubModel.find({});
  res.status(200).send(hubs);
});

hubsRouter.get("/:id", async (req, res) => {
  const hub = await hubModel.findOne({ _id: req.params.id });
  if (!hub) {
    res.status(404).send(`Hub with id ${req.params.id} was not found`);
  } else {
    res.status(200).send(hub);
  }
});

hubsRouter.post("/", async (req, res) => {
  const hub = new hubModel({
    name: req.body.name,
    type: req.body.type,
    ip: req.body.ip,
  });
  await hub.save();
  res.status(200).send(hub);
});

hubsRouter.delete("/:id", async (req, res) => {
  const hub = await hubModel.findOneAndDelete({ _id: req.params.id });
  if (!hub) {
    res.status(404).send(`Hub with id ${req.params.id} was not found`);
  } else {
    res.status(200).send(hub);
  }
});

hubsRouter.put("/:id", async (req, res) => {
  const hub = await hubModel.findOneAndUpdate({ _id: req.params.id }, req.body);
  if (!hub) {
    res.status(404).send(`Hub with id ${req.params.id} was not found`);
  } else {
    res.status(200).send(hub);
  }
});

module.exports = hubsRouter;
