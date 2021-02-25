const express = require("express");
const devicesRouter = express.Router();
const deviceModel = require("../models/device");

devicesRouter.use(express.json());

devicesRouter.get("/", async (req, res) => {
  const devices = await deviceModel.find({});
  res.status(200).send(devices);
});

devicesRouter.post("/", async (req, res) => {
  const device = new deviceModel({ name: req.body.name, type: req.body.type });
  await device.save();
  res.status(200).send(device);
});

module.exports = devicesRouter;
