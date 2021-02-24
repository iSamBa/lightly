const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const room = new Schema({
  name: String,
  type: String,
});

const roomModel = mongoose.model("room", room);
module.exports = roomModel;
