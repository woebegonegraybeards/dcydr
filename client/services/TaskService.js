
angular.module('TaskService', [])

.factory('Task', ['$http', '$location', function($http, $location) {

  return {

    addTopic: function(data) {
      console.log('addTopic from service data: ', data);
      return $http({
        method: 'POST',
        url: '/api/topic',
        // data: JSON.stringify({topic: data})
        data: {topic: data}
      });
    },
    
  };
         
}]);
