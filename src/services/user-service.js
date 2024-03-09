const UserRepo = require("../repositories/user-repository");

class UserService {
  constructor() {
    this.userRepo = new UserRepo();
  }

  async signUp(data) {
    try {
      const user = await this.userRepo.create(data);
      return user;
    } catch (error) {
      throw error;
    }
  }

  async signIn(data) {
    // get email
    // comparePassword
    // User authenticated
    try {
      const email = data.email;
      const currentPassword = data.password;
      const user = await this.userRepo.findBy({ email: email });

      if (!user) {
        throw {
          message: "No user with this email found",
        };
      }

      if (!user.comparePassword(currentPassword)) {
        throw {
          message: "Password incorrect",
        };
      }
      console.log("User successfully signed in");

      const token = user.genJWT();
      return token;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserService;
