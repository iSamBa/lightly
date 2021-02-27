const express = require("express");
const sceneModel = require("../models/scene");
const scenesRouter = express.Router();

scenesRouter.use(express.json());

scenesRouter.get("/", async (req, res) => {
  const scenes = await sceneModel.find({});
  res.status(200).send(scenes);
});

scenesRouter.get("/:id", async (req, res) => {
  const scene = await sceneModel.findOne({ _id: req.params.id });
  if (!scene) {
    res.status(404).send(`Scene with id ${req.params.id} was not found`);
  } else {
    res.status(200).send(scene);
  }
});

scenesRouter.post("/", async (req, res) => {
  const scene = new sceneModel({ name: req.body.name, type: req.body.type });
  await scene.save();
  res.status(200).send(scene);
});

scenesRouter.delete("/:id", async (req, res) => {
  const scene = await sceneModel.findOneAndDelete({ _id: req.params.id });
  if (!scene) {
    res.status(404).send(`Scene with id ${req.params.id} was not found`);
  } else {
    res.status(200).send(scene);
  }
});

scenesRouter.put("/:id", async (req, res) => {
  const scene = await sceneModel.findOneAndUpdate(
    { _id: req.params.id },
    req.body
  );
  if (!scene) {
    res.status(404).send(`Scene with id ${req.params.id} was not found`);
  } else {
    res.status(200).send(scene);
  }
});

module.exports = scenesRouter;
