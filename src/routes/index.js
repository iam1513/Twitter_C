// const express = require("express");

// const v1Routes = require("./v1");

// const router = express.Router();

// router.use("/v1", v1Routes);

// module.exports = router;

const express = require("express");
const { createTweet } = require("../controllers/tweet-controller");

const router = express.Router();

router.post('/tweets',createTweet)

module.exports = router;
