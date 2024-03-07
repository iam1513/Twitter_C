const mongoose = require("mongoose");

const hastagSchema = new mongoose.Schema({
  text: {
    type: string,
    required: true,
    unique: true,
  },

  tweets: {
    type: mongoose.Schema.Types.ObjectId,
  },
});
