const { json } = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/HMS", { useNewUrlParser: true});

module.exports.USERS_DB = require('./MODELS/USERS_DB');
