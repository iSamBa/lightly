const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const room = new Schema({
  name: String,
  type: String,
});

export default mongoose.model("room", room);
