const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hub = new Schema({
  name: String,
  type: String,
  ip: String,
});

const hubModel = mongoose.model("hub", hub);
module.exports = hubModel;
