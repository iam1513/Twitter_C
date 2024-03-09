const LikeRepo = require("../repositories/like-repository");
const TweetRepo = require("../repositories/tweet-repository");

class LikeService {
  constructor() {
    this.likeRepo = new LikeRepo();
    this.tweetRepo = new TweetRepo();
  }

  async toggleLike(modelId, modelType, userId) {
    // api/likes/toggle?id ={} (modelType : tweet/comment) userId
    let likeable;
    if (modelType === "Tweet") {
      likeable = await this.tweetRepo.getTweet(modelId);
    } else if (modelType === "Comment") {
    } else {
      console.log("Wrong Model Type");
    }

    const exists = await this.likeRepo.findByUserAndLikeable({
      user: userId,
      onModel: modelType,
      likeable: modelId,
    });

    ////////////////////////////////////////////////////////////////////////////////////////////////////
    let isAdded;

    if (exists) {
      try {
        if (!likeable.likes) {
          likeable.likes = []; // Initialize as an empty array if undefined
        }

        if (Array.isArray(likeable.likes)) {
          likeable.likes.pull(exists.id);
        } else {
          console.error("Error: likeable.likes is not an array");
        }

        await likeable.save();

        this.likeRepo.destroy(exists.id);

        isAdded = false;
      } catch (error) {
        console.error("Error during pull operation:", error.message);
        console.error("Error stack:", error.stack);
        isAdded = false; // Set isAdded to false to indicate the error
      }

      ///////////////////////////////////////////////////////////////////////////////////////////////////////////

      await likeable.save();
      this.likeRepo.destroy(exists.id);
      isAdded = false;
    } else {
      const newLike = await this.likeRepo.create({
        user: userId,
        onModel: modelType,
        likeable: modelId,
      });

      likeable.likes.push(newLike);
      await likeable.save(); // Doubt
      isAdded = true;
    }

    return isAdded;
  }
}

module.exports = LikeService;
