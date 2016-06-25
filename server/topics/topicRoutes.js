var topicController = require('./topicController.js');
var server = require('../server.js');

module.exports = function(app) {

  app.param('code', topicController.findTopic);

  app.route('/')
    .get(function(req, res) {
      console.log('api/topic GET ran -------------------: ');
      topicController.allTopics();
      server.io.emit('onTopicConnection', topicController);
      // server.io.emit('onTopicConnection', topicController);
      res.send(topicController);
    })
    .post(function(req, res) {
      console.log('api/topic POST ran -------------------: ', req.body.topic);
      var topic = req.body.topic;
      // Send the number of total votes to our method in voteCtrl to handle all that needs to happen
      topicController.newTopic(topic);
      // Send back our whole data object
      res.send(topicController);
    });

  app.put('/:code', topicController.updateTopic);

};