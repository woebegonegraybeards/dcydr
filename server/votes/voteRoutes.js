var voteController = require('./voteController.js');
var topicController = require('../topics/topicController.js');
var server = require('../server.js');

//vote session obj and methods
module.exports = function(app) {

  //main vote route 
  app.route('/')
    //get voting session obj
    .get(function(req, res) {
      // server.io.emit('stateViewChange', topicController);
      
      // server.io.emit('onConnection', voteController);
      res.send(voteController);
    })

    //set totalVotes
    .post(function(req, res) {
      topicController.allTopics();
      console.log('topicController', topicController);
      // server.io.emit('onTopicConnection', topicController);
      //parse number of voters from string to number
      var totalVotes = parseInt(req.body.votes);
      // Send the number of total votes to our method in voteCtrl to handle all that needs to happen
      voteController.setTotalVotes(totalVotes);
      // Send back our whole data object
      res.send(voteController);
      // res.send(topicController);
    });

  app.route('/1').post(function(req, res) {
    voteController.voteOne();
    res.send(voteController);
  });

  app.route('/2').post(function(req, res) {
    voteController.voteTwo();
    res.send(voteController);
  });

  app.route('/3').post(function(req, res) {
    voteController.voteThree();
    res.send(voteController);
  });

  app.route('/4').post(function(req, res) {
    voteController.voteFour();
    res.send(voteController);
  });

  app.route('/5').post(function(req, res) {
    voteController.voteFive();
    res.send(voteController);
  });

  app.route('/reset').post(function(req, res) {
    voteController.voteReset();
    res.send(voteController);
  });
};