const UserService = require("../services/user-service");

const userService = new UserService();
async function signUp(req, res) {
  try {
    const user = await userService.signUp({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
    });

    // const user = await userService.create(data);

    return res.json({
      success: true,
      message: "Successfully created an user",
      data: user,
      error: {},
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Error while creating an user",
      data: {},
      error: error,
    });
  }
}

async function signIn(req, res) {
  try {
    const user = await userService.signIn({
      email: req.body.email,
      password: req.body.password,
    });

    // const user = await userService.create(data);

    return res.json({
      success: true,
      message: "Successfully signed in",
      data: user,
      error: {},
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Error while signing In",
      data: {},
      error: error,
    });
  }
}

module.exports = { signUp, signIn };
