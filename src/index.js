const express = require("express");

const { ServerConfig } = require("./config");
const { connect } = require("./config/database-config");
const Tweet = require("./models/tweet-models");
const Hashtag = require("./models/hashtag-models");
const TweetRepository = require("./repositories/tweet-repository");

const app = express();

app.listen(3000, async () => {
  console.log("Server Started on Port 3000");
  connect();
  console.log("Connected to Mongo DB");
  // Tweet.create({
  //   content: "My first tweet",
  //   likes: 25,
  //   noOfRetweets: 5,
  //   comment: "My first comment",
  // });

  // Hashtag.create({
  //   text: "travel",
  //   tweets: ["65e5392ca957226cbdb351a8"],
  // });

  const tweetRepository = new TweetRepository();

  let tweet = await tweetRepository.deleteTweet({
    _id: "65e53dc3b0d32be169c1c853", // _id not id
  });
  console.log(tweet);
});
