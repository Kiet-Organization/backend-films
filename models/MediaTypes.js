const fs = require('fs');

// for .env
require('dotenv').config();

const DATA_PATH = process.env.MEDIA_TYPES_DATA_PATH || '../data/mediaTypeList.json';

const MediaTypes = {
	all: function() {
		return JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
	},
}

module.exports = MediaTypes;