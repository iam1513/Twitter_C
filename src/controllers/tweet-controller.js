const TweetService = require("../services/tweet-service");

const tweetService = new TweetService();
async function createTweet(req, res) {
  try {
    const data = req.body;
    const tweet = await tweetService.create(data);

    return res.json({
      success: true,
      message: "Successfully completed the request",
      data: tweet,
      error: {},
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Error while creating a request",
      data: {},
      error: error,
    });
  }
}

async function getTweet(req, res) {
  try {
    const tweet = await TweetService.getTweet(req.params.id);

    return res.json({
      success: true,
      message: "Successfully completed the request",
      data: tweet,
      error: {},
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Error while getting all",
      data: {},
      error: error,
    });
  }
}

module.exports = { createTweet, getTweet };
