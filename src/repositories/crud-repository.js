class CrudRepo {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    // Can't use  " async function create "  ES6
    try {
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      console.log("Something Went wrong in Crud Repo");
      throw error;
    }
  }

  async destroy(id) {
    try {
      const result = await this.model.findByIdAndDelete(id);
      return result;
    } catch (error) {
      console.log("Something Went wrong in Crud Repo");
      throw error;
    }
  }

  async getTweet(id) {
    try {
      const tweet = await this.model.findById(id);
      return tweet;
    } catch (error) {
      console.log("Something Went wrong in Crud Repo");
      throw error;
    }
  }

  async getAllTweets() {
    try {
      const tweets = await this.model.find({});
      return tweets;
    } catch (error) {
      console.log("Something Went wrong in Crud Repo");
      throw error;
    }
  }

  async updateTweet(id, data) {
    try {
      const tweet = await this.model.findById(id, data);
      return tweet;
    } catch (error) {
      console.log("Something Went wrong in Crud Repo");
      throw error;
    }
  }
}

module.exports = CrudRepo;
