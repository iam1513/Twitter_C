// const express = require("express");

// const v1Routes = require("./v1");

// const router = express.Router();

// router.use("/v1", v1Routes);

// module.exports = router;

const express = require("express");
const { createTweet, getTweet } = require("../controllers/tweet-controller");
const { signUp, signIn } = require("../controllers/user-controller");
const { toggleLike } = require("../controllers/like-controller");
const authenticate = require("../middlewares/authenticate-middleware");
const router = express.Router();

router.post("/tweets", createTweet);
router.get("/tweets/:id", getTweet);
router.post("/signUp", signUp);
router.post("/signIn", signIn);
router.post("/likes/toggle", authenticate, toggleLike);

module.exports = router;
