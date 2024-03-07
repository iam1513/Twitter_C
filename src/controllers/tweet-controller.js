const { TweetService } = require("../services");

async function createTweet(req, res) {
  try {
    console.log("IN CREATE TWEET");
    const tweet = await TweetService.createTweet({
      content: req.body.content,
      comment: req.body.comment,
      noOfRetweets: req.body.noOfRetweets,
      likes: req.body.likes,
    });

    return res.json({
      success: true,
      message: "Successfully completed the request",
      data: tweet,
      error: {},
    });
  } catch (error) {
    console.log("ERROR CAUGHT");
    return res.json({
      success: false,
      message: "Error while creating a request",
      data: {},
      error: error,
    });
  }
}

module.exports = { createTweet };
