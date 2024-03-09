const Hashtag = require("../models/hashtag-models");
const CrudRepo = require("./crud-repository");

class HashtagRepo extends CrudRepo {
  constructor() {
    super(Hashtag);
  }

  async bulkCreate(data) {
    try {
      const tags = await Hashtag.insertMany(data);
      return tags;
    } catch (error) {
      console.log("Something Went wrong in Hashtag Repo");
      throw error;
    }
  }

  async findByName(text) {
    try {
      const tag = await Hashtag.find({
        text: text,
      });
      return tag;
    } catch (error) {
      console.log("Something Went wrong in Hashtag Repo");
      throw error;
    }
  }

  async getHastag(id) {
    try {
      const tag = await Hashtag.findById(id);
      return tag;
    } catch (error) {
      console.log("Something Went wrong in Hashtag Repo");
      throw error;
    }
  }

  async deleteHastag(data) {
    try {
      const hastag = await Hashtag.findByIdAndDelete(data);
      return hastag;
    } catch (error) {
      console.log("Something Went wrong in Hashtag Repo");
      throw error;
    }
  }
}

module.exports = HashtagRepo;
