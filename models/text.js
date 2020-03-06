const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TextSchema = new Schema({
  textbody: { type: String, required: true }

});

module.exports = mongoose.model("Text", TextSchema);
