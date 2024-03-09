const CrudRepo = require("./crud-repository");
const User = require("../models/user-models");

class UserRepo extends CrudRepo {
  constructor() {
    super(User);
  }

  async findBy(data) {
    try {
      const response = await User.findOne(data);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserRepo;
