var topicController = require('./topicController.js');

module.exports = function(app) {

  app.param('id', topicController.findTopic);

  app.route('/')
    .get(topicController.allTopics)
    .post(topicController.newTopic);

  app.put('/:id', topicController.updateTopic);

};