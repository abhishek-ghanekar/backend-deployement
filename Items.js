const mongoose = require('mongoose')
const testSchema = new mongoose.Schema({
    name: String,
  });
const Item = mongoose.model("Item", testSchema);
module.exports = {Item}