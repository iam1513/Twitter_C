const Tweet = require("../models/tweet-models");
const CrudRepo = require("./crud-repository");

class TweetRepo extends CrudRepo {
  constructor() {
    super(Tweet);
  }

  async create(data) {
    // Can't use  " async function create "  ES6
    try {
      const response = await Tweet.create(data);
      return response;
    } catch (error) {
      console.log("Something Went wrong in Crud Repo");
      throw error;
    }
  }

  async destroy(id) {
    try {
      const result = await Tweet.findByIdAndDelete(id);
      return result;
    } catch (error) {
      console.log("Something Went wrong in Crud Repo");
      throw error;
    }
  }

  async getTweet(id) {
    try {
      const tweet = await Tweet.findById(id);
      return tweet;
    } catch (error) {
      console.log("Something Went wrong in Crud Repo");
      throw error;
    }
  }

  async getAllTweets() {
    try {
      const tweets = await Tweet.find({});
      return tweets;
    } catch (error) {
      console.log("Something Went wrong in Crud Repo");
      throw error;
    }
  }
}

module.exports = TweetRepo;
