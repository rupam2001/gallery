const mongoose = require("mongoose");

const chat = mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  
});

module.exports = mongoose.model("Chat", chat);
