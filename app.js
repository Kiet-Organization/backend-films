const express = require("express");
const app = express();

// user fetch
const userModel = require("./models/Users");

// video model
const videoModel = require("./models/Videos");

app.get("/", (req, res) => {
  res.json(userModel.all());
});

app.get("/test3", (req, res) => {
  res.json(videoModel.all());
});

const port = 4000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
