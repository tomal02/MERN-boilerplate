const mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
// Create Schema
const Schema = mongoose.Schema;
const ExampleSchema = new Schema({});

module.exports = Example = mongoose.model('example', ExampleSchema);
