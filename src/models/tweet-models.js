const mongoose = require("mongoose");

const { ObjectId } = require("bson");

const tweetSchema = new mongoose.Schema({
  content: {
    type: String,
  },
  likes: {
    type: Number,
  },
  noOfRetweets: {
    type: Number,
  },
  comment: {
    type: String,
  },
});

const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports = Tweet;
