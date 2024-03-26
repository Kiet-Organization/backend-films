const fs = require("fs");

require("dotenv").config();

const DATA_PATH = process.env.MOVIES_DATA_PATH || "../data/movieList.json";

const Movies = {
  all: function () {
    return JSON.parse(fs.readFileSync(DATA_PATH, "utf8"));
  },
};

module.exports = Movies;
