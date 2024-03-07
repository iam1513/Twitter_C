const { TweetRepo } = require("../repositories");

const tweetRepo = new TweetRepo();

async function createTweet(data) {
  try {
    const tweet = await tweetRepo.create(data);
    return tweet;
  } catch (error) {
    throw error();
  }
}

module.exports = {
  createTweet,
};
