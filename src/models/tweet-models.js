const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema({
  content: {
    type: String,
  },
  comment: {
    type: String,
  },
  noOfRetweets: {
    type: Number,
  },
  likes: {
    type: Number,
  },
});

const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports = Tweet ;
