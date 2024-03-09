const passport = require("passport");

const authenticate = (req, res, next) => {
  passport.authenticate("jwt", (err, user) => {
    if (err) next(err);
    if (!user) {
      return res.status(401).json({
        message: "Unauthorised Access",
      });
    }

    req.user = user;
    next();
  })(req, res, next);
};

module.exports = authenticate;
