var morgan = require('morgan');
var bodyParser = require('body-parser');

module.exports = function (app, express) {
  
  //use express router mini-app
  var voteRouter = express.Router();
  var topicRouter = express.Router();

  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  app.use(express.static(__dirname + '/../../client'));

  app.use('/api/vote', voteRouter);
  app.use('/api/topic', topicRouter);

  require('../votes/voteRoutes.js')(voteRouter);
  require('../topics/topicRoutes.js')(topicRouter);
};
