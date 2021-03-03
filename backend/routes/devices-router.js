const express = require("express");
const deviceModel = require("../models/device");
const devicesRouter = express.Router();

devicesRouter.use(express.json());

devicesRouter.get("/", async (req, res) => {
  const devices = await deviceModel.find({});
  res.status(200).send(devices);
});

devicesRouter.get("/:id", async (req, res) => {
  const device = await deviceModel.findOne({ _id: req.params.id });
  if (!device) {
    res.status(404).send(`Device with id ${req.params.id} was not found`);
  } else {
    res.status(200).send(device);
  }
});

devicesRouter.post("/", async (req, res) => {
  const device = new deviceModel({
    name: req.body.name,
    type: req.body.type,
    description: req.body.description,
  });
  await device.save();
  res.status(200).send(device);
});

devicesRouter.delete("/:id", async (req, res) => {
  const device = await deviceModel.findOneAndDelete({ _id: req.params.id });
  if (!device) {
    res.status(404).send(`Device with id ${req.params.id} was not found`);
  } else {
    res.status(200).send(device);
  }
});

devicesRouter.put("/:id", async (req, res) => {
  const device = await deviceModel.findOneAndUpdate(
    { _id: req.params.id },
    req.body
  );
  if (!device) {
    res.status(404).send(`Device with id ${req.params.id} was not found`);
  } else {
    res.status(200).send(device);
  }
});

module.exports = devicesRouter;
