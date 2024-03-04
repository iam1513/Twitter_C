const mongoose = require("mongoose");

const { ObjectId } = require("bson");

const hashtagSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    unique: true,
  },
  tweets: [
    {
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
});

const Hashtag = mongoose.model("Hashtag", hashtagSchema);

module.exports = Hashtag;
