var mongoose = require('mongoose');

var TopicSchema = new mongoose.Schema({
  desc: String,
  rating: Number,
  completed: Boolean
});

module.exports = mongoose.model('Topic', TopicSchema);