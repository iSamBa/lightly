const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scene = new Schema({
  name: String,
  type: String,
  description: String,
});

const sceneModel = mongoose.model("scene", scene);
module.exports = sceneModel;
