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

const userRouter = require("./route/User");

app.use("/user", userRouter);

app.listen(5000, () => {
  console.log("Server started ;)");
});
