const CrudRepo = require("./crud-repository");
const Like = require("../models/like-model");

class LikeRepo extends CrudRepo {
  constructor() {
    super(Like);
  }
}

module.exports = LikeRepo;
