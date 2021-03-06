var express = require('express');
var socketio = require('socket.io');
var mongoose = require('mongoose');
var middleware = require('./config/middleware.js');

// express server instance
var app = express();

// mongoose.connect('mongodb://localhost/sprintpal');

//SET UP MIDDLEWARE + ROUTES
middleware(app, express);

var PORT = process.env.PORT || 3000;
// NOTE: if you're running the app locally (not the deployed version on heroku), the line above will take care of the server, but make sure to uncomment out the line on 11 of the public/MainService.js file.

// Save the HTTP server created with express as a variable in order to reuse for socket.io
var server = app.listen(PORT);
console.log('Listening on', PORT);    

// Attach socket.io to our web server
io = socketio.listen(server);

io.sockets.on('connection', function(socket) {
  socket.on('event', function(event) {
    console.log('socket on event: ');
    socket.join(event);
  });
});
    
// Export the socket so we can have it listen and emit elsewhere (used in voteCtrl):
module.exports.io = io;
