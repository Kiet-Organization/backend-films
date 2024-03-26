const fs = require("fs");

require("dotenv").config();

const DATA_PATH = process.env.VIDEO_DATA_PATH || "../data/videoList.json";

const Videos = {
  all: function () {
    return JSON.parse(fs.readFileSync(DATA_PATH, "utf8"));
  },
};

module.exports = Videos;
