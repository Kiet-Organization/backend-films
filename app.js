const express = require("express");
const app = express();

// test genres fetch
const testGenreModelFile = require('./models/Users');

app.get("/", (req, res) => {
  res.json(testGenreModelFile.all());
});

app.get("/test3", (req, res) => {
  res.json(testGenreModelFile.all());
});

const port = 4000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
