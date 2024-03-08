const CrudRepo = require("./crud-repository");
const Comment = require("../models/comment-models");

class CommentRepo extends CrudRepo {
  constructor() {
    super(Like);
  }
}

module.exports = CommentRepo;
