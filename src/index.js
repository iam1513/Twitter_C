const express = require("express");

const { ServerConfig, DatabaseConfig } = require("./config");
const apiRoutes = require("./routes");
const Tweet = require("./models/tweet-models");
const { TweetRepo } = require("./repositories");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", apiRoutes);

app.listen(ServerConfig.PORT, async () => {
  console.log(`Server Started on Port ${ServerConfig.PORT}`);
  DatabaseConfig.connect();
  console.log("Connected to Mongo DB");

  // const tweetRepo = new TweetRepo();
  // const tweet = await tweetRepo.getTweet("65e96cfc5c7f20c86cb6867f");
  // console.log(tweet);
});
