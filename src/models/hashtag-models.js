const mongoose = require("mongoose");

const hastagSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    unique: true,
  },

  tweets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      // ID's of the tweets
    },
  ],
});

const Hashtag = mongoose.model("Hashtag", hastagSchema);

module.exports = Hashtag;
