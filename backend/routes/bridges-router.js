const express = require("express");
const bridgeModel = require("../models/bridge");
const bridgesRouter = express.Router();

bridgesRouter.use(express.json());

bridgesRouter.get("/", async (req, res) => {
  const bridges = await bridgeModel.find({});
  res.status(200).send(bridges);
});

bridgesRouter.get("/:id", async (req, res) => {
  const bridge = await bridgeModel.findOne({ _id: req.params.id });
  if (!bridge) {
    res.status(404).send(`Bridge with id ${req.params.id} was not found`);
  } else {
    res.status(200).send(bridge);
  }
});

bridgesRouter.post("/", async (req, res) => {
  const bridge = new bridgeModel({
    name: req.body.name,
    type: req.body.type,
    ip: req.body.ip,
  });
  await bridge.save();
  res.status(200).send(bridge);
});

bridgesRouter.delete("/:id", async (req, res) => {
  const bridge = await bridgeModel.findOneAndDelete({ _id: req.params.id });
  if (!bridge) {
    res.status(404).send(`Bridge with id ${req.params.id} was not found`);
  } else {
    res.status(200).send(bridge);
  }
});

bridgesRouter.put("/:id", async (req, res) => {
  const bridge = await bridgeModel.findOneAndUpdate(
    { _id: req.params.id },
    req.body
  );
  if (!bridge) {
    res.status(404).send(`Bridge with id ${req.params.id} was not found`);
  } else {
    res.status(200).send(bridge);
  }
});

module.exports = bridgesRouter;
