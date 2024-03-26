const express = require("express");
const app = express();

// test genres fetch
const testGenreModelFile = require('./models/Videos');
// test media type fetch
const testMediaTypeModelFile = require('./models/MediaTypes');

app.get("/", (req, res) => {
  res.json(testGenreModelFile.all());
});

app.get("/test4", (req, res) => {
  res.json(testMediaTypeModelFile.all());
});

const port = 4000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
