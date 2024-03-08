const HashtagRepo = require("../repositories/hashtag-repository");
const TweetRepo = require("../repositories/tweet-repository");

class TweetService {
  constructor() {
    this.tweetRepo = new TweetRepo();
    this.hashtagRepo = new HashtagRepo();
  }

  async create(data) {
    const content = data.content;
    const tags = content
      .match(/#+[a-zA-Z0-9(_)]+/g)
      .map((tag) => tag.substring(1).toLowerCase());
    // #HashTag ===> hastag using above

    // Storing the Tweet
    const tweet = await this.tweetRepo.create(data);

    // Storing Hashtags
    let alreadyPresentTags = await this.hashtagRepo.findByName(tags);
    let textOfPresentTags = alreadyPresentTags.map((tags) => tags.text); //  To consvert into array as its a json
    let newTags = tags.filter((tag) => !textOfPresentTags.includes(tag));

    // to add new tags to data base
    newTags = newTags.map((tag) => {
      return {
        text: tag,
        tweets: [tweet.id],
      };
    });

    await this.hashtagRepo.bulkCreate(newTags);
    alreadyPresentTags.forEach((tag) => {
      tag.tweet.push(tweet.id);
      tag.save();
    });

    return tweet;
  }

  async getTweet(tweetId) {
    const tweet = await this.tweetRepo.getTweet(tweetId);
    return tweet;
  }
}

module.exports = TweetService;
