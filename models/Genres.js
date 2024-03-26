const fs = require('fs');

// for .env
require('dotenv').config();

const DATA_PATH = process.env.GENRES_DATA_PATH || '../data/genreList.json';

const Genres = {
	all: function() {
		return JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
	},
}

module.exports = Genres;