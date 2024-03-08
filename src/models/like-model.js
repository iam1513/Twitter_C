const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
  },

  onModel: {
    type: String,
    required: true,
    enum: ["Tweet", "comment"],
    // We have now linked like to both a comment as well as a tweet
  },
  likeable: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: "onModel",
  },
});

const like = mongoose.model("Like", likeSchema);

module.exports = like;
