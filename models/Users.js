const fs = require("fs");

// xài process.env thì luôn có declaration của dotenv đã tải và dùng config()
require("dotenv").config();

const DATA_PATH = process.env.USER_DATA_PATH || "../data/userToken.json";

const Users = {
  all: function () {
    return JSON.parse(fs.readFileSync(DATA_PATH, "utf8"));
  },
};

module.exports = Users;
