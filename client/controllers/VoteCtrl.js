
angular.module('VoteCtrl', [])

.controller('VotingController', function($scope, Vote, Main, $interval, $location) {

  $scope.init = function(){
    Vote.getVoters();
  }();
  
  $scope.chartData = [
    [0],
    [0],
    [0],
    [0],
    [0]
  ];

  $scope.currentVote = null;  // Keeps track of current vote
  $scope.lastVote = null;     // Keeps track of previous vote, if one
  $scope.topicItem = '';      // Chart topic item title
  $scope.currentItem = 0;     // Current item selected
  $scope.voteStarter = false; // For setting which client started the vote
  
  // onTopicChange
  Main.socket.on('onTopicChange', function(data){
    // console.log('on TOPICCHANGE: ', data.topics);
    $scope.topicItem = data.topics[data.currentTopic];
    // This line seems to be needed to make sure all clients update appropriately
    $scope.$apply();
  });

  // Checks sockets on connection to update your view
  // Main.socket.on('onTopicConnection', function(data){
  //   // console.log('onTopicConnection: ', data);
  //   // Updates chart title
  //   $scope.topicItem = data.topics[data.currentTopic];
  //   // This line seems to be needed to make sure all clients update appropriately
  //   $scope.$apply();
  // });
  
  // Checks sockets on connection to update your view
  Main.socket.on('onConnection', function(data){
    console.log('data on connect: ', data);
    $scope.chartData = [
      [data.one],
      [data.two],
      [data.three],
      [data.four],
      [data.five]
    ];
    
    // Sets number of votes
    $scope.voterCount = data.totalVotes;
    // Updates current chart topic
    $scope.topicItem = data.topics[0];
    // This line seems to be needed to make sure all clients update appropriately
    $scope.$apply();
  });
  
  // When the current topic is complete
  Main.socket.on('onTopicComplete', function(data){
    // Updates chart title
    $scope.topicItem = data.topics[data.currentTopic];

    // This line seems to be needed to make sure all clients update appropriately
    $scope.$apply();
  });
  
  // Listens for allVotesIn, from
  Main.socket.on('allVotesIn', function(data){
    console.log('allVotesIn from VoteCtrl: ', data);
    var result = data.result;

    // I don't know how this is being invoked......
    // Updates to the next topic
    // Vote.nextTopic(result)
    //   .catch(function (err) {
    //     console.log(err);
    //   });

    // This line seems to be needed to make sure all clients update appropriately
    $scope.$apply();
  });
  
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
  
  // Updates users current and last vote
  $scope.updateVoteRecords = function(vote) {
    // Makes sure the user has voted already
    if ( $scope.currentVote !== null ){
      $scope.lastVote = $scope.currentVote;
      // Removes last vote
      Vote.removeVote($scope.lastVote)
        .catch(function (err) {
          console.log(err);
        });
    }
    // Updates users current vote
    $scope.currentVote = vote;
  };

  // Takes user vote input and post to server - called when user clicks Y/N on view 2
  $scope.postVote1 = function() {
    // Updates Records
    $scope.updateVoteRecords(1);
    
    // Submits new vote
    Vote.addVote1()
      .catch(function (err) {
        console.log(err);
      });
  };

  $scope.postVote2 = function() {
    // Updates Records
    $scope.updateVoteRecords(2);
    // Submits new vote
    Vote.addVote2()
      .catch(function (err) {
        console.log(err);
      });
  };
  
  $scope.postVote3 = function() {
    // Updates Records
    $scope.updateVoteRecords(3);
    // Submits new vote
    Vote.addVote3().
      catch(function (err) {
        console.log(err);
      });
  };
  
  $scope.postVote4 = function() {
    // Updates Records
    $scope.updateVoteRecords(4);
    // Submits new vote
    Vote.addVote4().
      catch(function (err) {
        console.log(err);
      });
  };
  
  $scope.postVote5 = function() {
    // Updates Records
    $scope.updateVoteRecords(5);
    // Submits new vote
    Vote.addVote5().
      catch(function (err) {
        console.log(err);
      });
  };
  
});