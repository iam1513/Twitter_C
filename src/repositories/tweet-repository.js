const CrudRepo = require("./crud-repository");
const Tweet = require("../models/tweet-models");

class TweetRepo extends CrudRepo {
  constructor() {
    super(Tweet);
  }
}

module.exports = TweetRepo;
