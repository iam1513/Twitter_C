const express = require("express");

const { ServerConfig, DatabaseConfig } = require("./config");
const apiRoutes = require("./routes");
const Tweet = require("./models/tweet-models");
const { TweetController } = require("./controllers");
const passport = require("passport");
const passportAuth = require("./middlewares/jwt-middleware");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());
passportAuth(passport); // from jwt-middleware
app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, async () => {
  console.log(`Server Started on Port ${ServerConfig.PORT}`);
  DatabaseConfig.connect();
  console.log("Connected to Mongo DB");

  // const tweet = await TweetController.createTweet({
  //   content: "How r you?",
  // });

  // console.log(tweet);
});
