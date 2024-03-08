const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
  },

  comment: {
    type: String,
  },

  onModel: {
    type: String,
    required: true,
    enum: ["Tweet", "comment"],
    // We have now linked comment to both a comment as well as a tweet
    // We can comment on tweet as well as comment on a comment
  },
  commentable: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: "onModel",
  },
});

const comment = mongoose.model("Comment", commentSchema);

module.exports = comment;
