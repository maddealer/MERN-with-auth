const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

app.use(cookieParser());
app.use(express.json());

mongoose.connect(
  "mongodb://localhost:27017/mernauth",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("MongoDB connected ;)");
  }
);

const User = require("./models/User");

const userInput = {
  username: "maddealer",
  password: "1234567",
  role: "admin",
};

const user = new User(userInput);

user.save((err, document) => {
  if (err) console.log(err);
  console.log(document);
});

app.listen(5000, () => {
  console.log("Server started ;)");
});
