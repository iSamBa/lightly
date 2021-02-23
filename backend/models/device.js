const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const device = new Schema({
  name: String,
  type: String,
  hub: String,
  room: String,
  scene: String,
});

export default mongoose.model("device", device);
