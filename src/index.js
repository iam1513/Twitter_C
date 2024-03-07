const express = require("express");

const { ServerConfig, DatabaseConfig } = require("./config");
// const { connect } = require("./config/database-config");
const apiRoutes = require("./routes");
const Tweet = require("./models/tweet-models");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, async () => {
  console.log(`Server Started on Port ${ServerConfig.PORT}`);
  DatabaseConfig.connect();
  console.log("Connected to Mongo DB");
});
