
angular.module('VoteCtrl', [])

.controller('VotingController', function($scope, Vote, Main, $interval, $location) {
  
  $scope.ideas = [
    ['ideas1', 0],
    ['ideas2', 0],
    ['ideas3', 0],
    ['ideas3', 0],
    ['ideas3', 0]
  ];

  // For setting which client started the vote
  $scope.voteStarter = false;

  // Checks socks on initial
  Main.socket.on('onConnection', function(data){
    console.log('data on connect: ', data);
    $scope.ideas = [
      ['ideas1', data.one],
      ['ideas2', data.two],
      ['ideas3', data.three],
      ['ideas3', data.four],
      ['ideas3', data.five]
    ];
    // This line seems to be needed to make sure all clients update appropriately
    $scope.$apply();
  });
  
  // Listen to any server-side stateView changes via the socket, and update $scope.ideas accordingly
  Main.socket.on('stateViewChange', function(data) {
    $scope.ideas = [
      ['ideas1', data.one],
      ['ideas2', data.two],
      ['ideas3', data.three],
      ['ideas3', data.four],
      ['ideas3', data.five]
    ];
    // This line seems to be needed to make sure all clients update appropriately
    $scope.$apply();
  });
  
  //---view2------------------------------------------------------
  
  $scope.chartOne = 0;

  // Takes user vote input and post to server - called when user clicks Y/N on view 2
  $scope.postVote1 = function() {
    Vote.addVote1()
      .catch(function (err) {
        console.log(err);
      });
  };

  $scope.postVote2 = function() {
    Vote.addVote2()
      .catch(function (err) {
        console.log(err);
      });
  };
  
  $scope.postVote3 = function() {
    Vote.addVote3().
      catch(function (err) {
        console.log(err);
      });
  };
  
  $scope.postVote4 = function() {
    Vote.addVote4().
      catch(function (err) {
        console.log(err);
      });
  };
  
  $scope.postVote5 = function() {
    Vote.addVote5().
      catch(function (err) {
        console.log(err);
      });
  };
  
});