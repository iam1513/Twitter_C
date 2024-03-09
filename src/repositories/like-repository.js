const CrudRepo = require("./crud-repository");
const Like = require("../models/like-model");

class LikeRepo extends CrudRepo {
  constructor() {
    super(Like);
  }

  async findByUserAndLikeable(data) {
    try {
      const like = await Like.findOne(data);
      return like;
    } catch (error) {
      throw error;
    }
  }

  // async deleteLike(id) {
  //   try {
  //     const result = await this.model.findByIdAndDelete(id);
  //     return result;
  //   } catch (error) {
  //     console.log("Something Went wrong in Crud Repo");
  //     throw error;
  //   }
  // }
}

module.exports = LikeRepo;
