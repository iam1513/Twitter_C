const mongoose = require("mongoose");

const connect = async () => {
  await mongoose.connect(
    "mongodb+srv://iam1513:atlas1513@cluster0.h6slkiy.mongodb.net/"
  );
};

module.exports = { connect };
