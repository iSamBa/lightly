const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const device = new Schema({
  name: String,
  type: String,
  hub: mongoose.Types.ObjectId,
  room: mongoose.Types.ObjectId,
  scene: mongoose.Types.ObjectId,
});

const deviceModel = mongoose.model("device", device);
module.exports = deviceModel;
