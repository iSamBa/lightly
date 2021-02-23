const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hub = new Schema({
  name: String,
  type: String,
  ip: String,
});

export default mongoose.model("hub", hub);
