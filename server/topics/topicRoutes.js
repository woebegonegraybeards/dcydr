var topicController = require('./topicController.js');

module.exports = function(app) {

  app.param('code', topicController.findTopic);

  app.route('/')
    .get(topicController.allTopics)
    .post(topicController.newTopic);

  app.put('/:code', topicController.updateTopic);

};