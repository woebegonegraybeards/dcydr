
angular.module('TaskCtrl', [])

.controller('TaskController', function($scope, Vote, Main, Task, $interval, $location) {
  
  // $scope.taskList = 'Task Item';
  
  $scope.completedTasks = 'List here';
  
  $scope.addTopic = function() {
    // var data = JSON.stringify($scope.topic);
    Task.addTopic($scope.topic)
      .catch(function (err) {
        console.log(err);
      });
  };
  
  // Checks sockets on connection to update your view
  Main.socket.on('onTopicsConnection', function(data){
    console.log('data on onTopicConnection: ', data);
    $scope.taskList = data.topics;
    // This line seems to be needed to make sure all clients update appropriately
    $scope.$apply();
  });
  
  // Checks sockets on connection to update your view
  Main.socket.on('onTopicPost', function(data){
    console.log('data on onTopicPost: ', data);
    $scope.taskList = data.topics;
    // This line seems to be needed to make sure all clients update appropriately
    $scope.$apply();
  });
  
  
});