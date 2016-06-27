var topicController = require('./topicController.js');
var server = require('../server.js');

module.exports = function(app) {

  app.param('code', topicController.findTopic);

  app.route('/')
    .get(function(req, res) {
      // console.log('api/topic GET ran -------------------: ', req.data.data);
      // topicController.singleTopic();
      // console.log('topicController', topicController);
      
      // For init from TaskCtrl
      server.io.emit('onTopicConnection', topicController);
      
      
      // // server.io.emit('onTopicConnection', topicController);
      res.send(topicController);
    })
    // MVP
    .post(function(req, res) {
      console.log('api/topic POST ran -------------------: ', req.body);
      var topic = req.body.topic;
      topicController.singleTopic(topic);
      // Send the number of total votes to our method in voteCtrl to handle all that needs to happen
      // topicController.newTopic(topic);
      // Send back our whole data object
      res.send(topicController);
    });
    
    // MVP
  app.route('/next')
    .post(function(req, res) {
      console.log('api/topic/next POST ran -------------------: ');

      // Moves current task into completed array, updates next topic
      topicController.taskComplete();
      
      // Send back our whole data object
      res.send(topicController);
    });
    
    // FUll app with database attempt
    // .post(function(req, res) {
    //   console.log('api/topic POST ran -------------------: ', req.body.topic);
    //   var topic = req.body.topic;
    //   // Send the number of total votes to our method in voteCtrl to handle all that needs to happen
    //   topicController.newTopic(topic);
    //   // Send back our whole data object
    //   res.send(topicController);
    // });

  app.put('/:code', topicController.updateTopic);

};