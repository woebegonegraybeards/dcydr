
angular.module('TaskCtrl', [])

.controller('TaskController', function($scope, Vote, Main, Task, $interval, $location) {
  
  $scope.taskList = [];         // Current task list
  $scope.completedTasks = [];   // Completed tasks
  
  $scope.addTopic = function() {
    // var data = JSON.stringify($scope.topic);
    Task.addTopic($scope.topic)
      .catch(function (err) {
        console.log(err);
      });
  };
  
  // $scope.test = Main.topic;
  
  $scope.addSingleTopic = function( ) {
    // console.log('addSingleTopic ran');
    // Adds topic into taskList - front end
    $scope.taskList.push($scope.topic);
    // var data = JSON.stringify($scope.topic);
    Task.addSingleTopic($scope.topic)
      .catch(function (err) {
        console.log(err);
      });
    $scope.topic = '';
  };

  // $scope.update = function(){
  //   Task.getState();
  // }();
  
  // onTopicChange
  Main.socket.on('onTopicChange', function(data){
    // console.log('on TOPICCHANGE: ', data.topics);
    $scope.taskList = data.topics;
    $scope.completedTasks = data.completedTopics;
    // This line seems to be needed to make sure all clients update appropriately
    $scope.$apply();
  });
  
  // Checks sockets on connection to update your view
  Main.socket.on('onTopicConnection', function(data){
    // console.log('data on onTopicConnection:', data);
    $scope.taskList = data.topics;
    $scope.completedTasks = data.completedTopics;
    // This line seems to be needed to make sure all clients update appropriately
    $scope.$apply();
  });
  
  // When the current topic is complete
  Main.socket.on('onTopicComplete', function(data){
    console.log('data on onTopicComplete:', data);
    
    $scope.taskList = data.topics;
    $scope.completedTasks = data.completedTopics;
    
    // This line seems to be needed to make sure all clients update appropriately
    $scope.$apply();
  });
  
  // Init - make API call to update everything on connection
  $scope.init = function(){
    console.log('init ran: ');
    Task.getState()
    .catch(function (err) {
        console.log(err);
    });
  }();
  
  // Checks sockets on connection to update your view
  // Main.socket.on('onTopicChange', function(data){
  //   console.log('data on onTopicPost: ', data);
  //   $scope.taskList = data.topics;
  //   // This line seems to be needed to make sure all clients update appropriately
  //   $scope.$apply();
  // });
  
  
});