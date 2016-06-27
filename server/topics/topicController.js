var Topic = require('./topicModel.js');
var server = require('../server.js');

module.exports = {
  
  topics: [],
  completedTopics: [],
  currentTopic: 0,
  
  singleTopic: function(data){
    // console.log('topicController singleTopic req: ', data);
    
    // Pushes new topic into topics array
    this.topics.push(data);
    
    // Emits onTopicChange to TaskCtrl.js and VoteCtrl.js
    server.io.emit('onTopicChange', this);
  },
  
  // Remove first topic, adjusts array
  taskComplete: function(result){
    // var resultAmount = result;                  // Stores the result amount
    // var complete = done + ' ' + resultAmount;   // Combines the task with the result amount
    // this.completedTopics.push(complete);        // Adds done item to completedTopics
    
    // Removes and stores the first item in topics array
    var task = this.topics.shift();
    // Adds done item to completedTopics
    this.completedTopics.push(task);
  
    // Emits onTopicCompelete to TaskCtrl.js and VoteCtrl.js
    server.io.emit('onTopicComplete', this);
  },
  
  
  findTopic: function(req, res, next) {
    var desc = req.body.topic;
    Topic.findOne({desc: desc}).then(function(topic) {
      if (topic) {
        req.topic = topic;
        next();
      } else {
        res.send('Topic doesn\'t exist');
      }
    }).catch(function(error) {
      console.error(error);
      next();
    });
  },

  // Retrieves all data from database
  allTopics: function(req, res) {
    // Calls database, searches all results
    Topic.find({})
      .then(function(topics) {
      // res.json(topics);
      console.log('allTopics -------------------: ');
      this.topics = topics;
      // console.log('this.topics: ', this.topics);
      
      // server.io.emit('onTopicsConnection', this);
      
      // res.send(this);
      // return this;
    })
    // .then(function(){
    //   server.io.emit('onTopicsConnection', this);
    // })
    .catch(function(error) {
      console.error(error);
    });
  },

  newTopic: function(data) {
    var topic = data;
    
    // console.log('topic from topicController: ', topic);
    
    // this.topics.push(topic);
    // server.io.emit('onTopicPost', this);

    Topic.findOne({desc: topic}).then(function(match) {
      if (match) {
        res.send(match);
      } else {
        return topic;
      }
    }).then(function(topic) {
      if (topic) {
        var newTopic = {
          desc: topic
        };
        return Topic.create(newTopic);
      }
    }).then(function(createdTopic) {
      if (createdTopic) {
        res.json(createdTopic);
      }
    }).catch(function(error) {
      console.error(error);
    });
  },

  updateTopic: function(req, res) {
    var topic = req.topic.desc;
    var rating = req.body.rating;
    
    var query = { desc: topic };

    Topic.findOneAndUpdate(query, { rating: rating }, {upsert: true}).then(function(topic) {
      res.json(topic);
    }).catch(function(error) {
      console.error(error);
    });
  }
};