
angular.module('TaskCtrl', [])

.controller('TaskController', function($scope, Vote, Main, Task, $interval, $location) {
  
  $scope.taskList = 'Task Item';
  
  $scope.completedTasks = 'List here';
  
});