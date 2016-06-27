
angular.module('TaskService', [])

.factory('Task', ['$http', '$location', function($http, $location) {

  return {
    
    // socket: io('localhost:3000'),
    
    //call to get state
    getState: function() {
      return $http.get('/api/topic');
    },

    // Full call with database
    addTopic: function(data) {
      // console.log('addTopic from service data: ', data);
      return $http({
        method: 'POST',
        url: '/api/topic',
        // data: JSON.stringify({topic: data})
        data: {topic: data}
      });
    },
    
    // MVP call
    addSingleTopic: function(data) {
      // console.log('addSingleTopic from service data: ', data);
      return $http({
        method: 'POST',
        url: '/api/topic',
        // data: JSON.stringify({topic: data})
        data: JSON.stringify({topic:data})
      });
    }
    
  };
         
}])

// .run(function(Task) {
//   Task.getState().then(function (state) {
//     Task.updateView(state.data.stateView);
//   });
// });