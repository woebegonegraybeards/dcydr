
angular.module('VoteCtrl', [])

.controller('VotingController', function($scope, Vote, Main, $interval, $location) {
  
  $scope.chartData = [
    [0],
    [0],
    [0],
    [0],
    [0]
  ];
  
  $scope.topicItem = '';    // Chart topic item title
  $scope.currentItem = 0;   // Current item selected
  $scope.voteStarter = false; // For setting which client started the vote
  
  // onTopicChange
  Main.socket.on('onTopicChange', function(data){
    // console.log('on TOPICCHANGE: ', data.topics);
    $scope.topicItem = data.topics[data.currentTopic];
    // This line seems to be needed to make sure all clients update appropriately
    $scope.$apply();
  });
  
  // Checks if votes are complete
  // Main.socket.on('voteCheck', function(data){
  //   console.log('on voteCheck: ', data);
    
  //   // Vote.nextTopic()
  //   //     .catch(function (err) {
  //   //       console.log(err);
  //   //     });
    
  //   // This line seems to be needed to make sure all clients update appropriately
  //   $scope.$apply();
  // });
  
  // Checks sockets on connection to update your view
  Main.socket.on('onTopicConnection', function(data){
    // console.log('data on onTopicConnection from VoteCtrl.js:', data);
    // console.log('data.currentTopic: ', data.currentTopic);
    $scope.topicItem = data.topics[data.currentTopic];
    // $scope.taskList = data.topics;
    // $scope.completedTasks = data.completedTopics;
    
    // This line seems to be needed to make sure all clients update appropriately
    $scope.$apply();
  });
  
  // Checks sockets on connection to update your view
  Main.socket.on('onConnection', function(data){
    // console.log('data on connect: ', data);
    $scope.chartData = [
      [data.one],
      [data.two],
      [data.three],
      [data.four],
      [data.five]
    ];
    $scope.voterCount = data.totalVotes;
    // This line seems to be needed to make sure all clients update appropriately
    $scope.$apply();
  });
  
  $scope.init = function(){
    Vote.getVoters();
  }();
  
  // When the current topic is complete
  Main.socket.on('onTopicComplete', function(data){
    // console.log('data on onTopicComplete INSDIE VOTECTRL:', data);
    
    $scope.topicItem = data.topics[data.currentTopic];
    
    // This line seems to be needed to make sure all clients update appropriately
    $scope.$apply();
  });
  
  // Listens for allVotesIn, from
  Main.socket.on('allVotesIn', function(data){
    // console.log('data on allVotesIn: ', data);
    // Disable buttons
      //
    // Display vote count / winner
      //
      
      // NEXT VOTE
      // Vote.nextTopic()
      //   .catch(function (err) {
      //     console.log(err);
      //   });
    // This line seems to be needed to make sure all clients update appropriately
    $scope.$apply();
  });
  
  // Listens for voteCount to set xAis
  // Main.socket.on('voterCount', function(data){
  //   // console.log('socket on voteCount: ', data);
    
  //   // Disable buttons
  //   // Display vote count / winner
  //   // This line seems to be needed to make sure all clients update appropriately
  //   $scope.$apply();
  // });
  
  // Listen to any server-side stateView changes via the socket, and update $scope.chartData accordingly
  Main.socket.on('stateViewChange', function(data) {
    // console.log('data on change: ', data.totalVotes);
    $scope.chartData = [
      [data.one],
      [data.two],
      [data.three],
      [data.four],
      [data.five]
    ];
    $scope.voterCount = data.totalVotes;
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