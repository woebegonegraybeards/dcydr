
angular.module('TaskService', [])

.factory('Task', ['$http', '$location', function($http, $location) {

  return {

    addVote1: function(vote) {
      return $http({
        method: 'POST',
        url: '/api/vote/1',
        data: vote
      });
    },
    
  };
         
}]);
