var mongoose = require('mongoose');
var crypto = require('crypto');
var Promise = require('bluebird');

mongoose.Promise = Promise;

var TopicSchema = new mongoose.Schema({
  code: String,
  desc: String,
  rating: {
    type: Number,
    default: 0
  },
  completed: {
    type: Boolean,
    default: false
  }
});

var createSha = function(topic) {
  var shasum = crypto.createHash('sha1');
  shasum.update(topic);
  return shasum.digest('hex').slice(0, 5);
};

TopicSchema.pre('save', function(next) {
  var code = createSha(this.desc);
  this.code = code;
  next();
});

module.exports = mongoose.model('Topic', TopicSchema);