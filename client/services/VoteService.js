
angular.module('VoteService', [])

.factory('Vote', ['$http', '$location', function($http, $location) {

  return {

    // create the socket variable to be used to emit and listen in the controller
    // NOTE: for running on heroku (the deployed version), we'll need the socket to look there
    // socket: io('https://dcydr.herokuapp.com'),

    // IF INSTEAD you're running your app locally, just comment out the line above and uncomment the line below. Remember to switch it back before commiting!
    socket: io('localhost:3000'),

    // viewToRouteConverter: {
    //   1: '/view1',
    //   2: '/view2',
    //   3: '/view3'
    // },
    
    getVoters: function(){
      return $http({
        method: 'GET',
        url: '/api/vote/',
      });  
    },
    
    // I attempted to call this fn during allVotesIn socket emit from VoteCtrl.js but it seems to be calling
    // itself somehow. The result is passed in from VoteCtrl.js allVotesIn emit and is the average vote for
    // the completed task.
    nextTopic: function(result){
      console.log('nextTopic Service ran: ');
      return $http({
        method: 'POST',
        url: '/api/topic/next',
        data: {result: result}
      });  
    },
    
    //sends a vote for 1
    addVote1: function(vote) {
      return $http({
        method: 'POST',
        url: '/api/vote/1',
        data: vote
      });
    },

    //sends a vote for 2
    addVote2: function(vote) {
      return $http({
        method: 'POST',
        url: '/api/vote/2',
        data: vote
      });
    },

    //sends a vote for 3
    addVote3: function(vote) {
      return $http({
        method: 'POST',
        url: '/api/vote/3',
        data: vote
      });
    },
    
    //sends a vote for 4
    addVote4: function(vote) {
      return $http({
        method: 'POST',
        url: '/api/vote/4',
        data: vote
      });
    },
    
    //sends a vote for 5
    addVote5: function(vote) {
      return $http({
        method: 'POST',
        url: '/api/vote/5',
        data: vote
      });
    }
    
  };       
}])

//Get the state and update the view on first page load
// .run(function(Main) {
//   Main.getState().then(function (state) {
//     Main.updateView(state.data.stateView);
//   });
// });
