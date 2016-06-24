
angular.module('VoteCtrl', [])

.controller('VotingController', function($scope, Vote, Main, $interval, $location) {
  
  // TEST socket connection between server and chart -------------------
  
  // Stringified defaults obj to copy with JSON parse whenever we need to reset the voter object to defaults
  $scope.voteObjDefaults = JSON.stringify({ 
    stateView: 1,
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
    totalVotes: 3,
    allVotesIn: false,
    result: null
  });

  // The voter object $scope.voteObj tracks all the data we need to know, mimics the object the server stores
  // Voter object set initially to defaults (copying the defaults object so the two are not connected):
  $scope.voteObj = JSON.parse($scope.voteObjDefaults);

  // For displaying user's vote on view3. (Note: we didn't put it in the voter object as a property because it is not on the server's data object)
  $scope.userVote = null;

  // For setting which client started the vote
  $scope.voteStarter = false;

  $scope.chartData = {
    1: $scope.voteObj[1]
  }
  
  // Listen to any server-side stateView changes via the socket, and update $scope.voteObj accorgingly
  Main.socket.on('stateViewChange', function(data) {
    // console.log('data: ', data);
    // Creates an array of bar data for the chart
    // var bars = ;
    // $scope.chartOptions['series'][0]['data'] = [ data.one, data.two, data.three, data.four, data.five];
    console.log('$scope.voteObj: ', $scope.voteObj);
    //$scope.chartOptions['series'][0].setData( { data: { one: data.one, two: data.two, three: data.three, four: data.four, five: data.five} });
    // Highcharts.['series'][0].setData([ data.one, data.two, data.three, data.four, data.five]);
    console.log("$scope.chartOptions['series'][0]['data'][bars]: ", $scope.chartOptions['series'][0]['data']);
    // Update the voter object to reflect the new data
    $scope.voteObj = data;
    // Change the route as appropriate
    var test = Main.getState();
    // This line seems to be needed to make sure all clients update appropriately:
    $scope.$apply();
  });
  
  // TEST chart inside of voting controller --------------------
  
  $scope.itemTitle = 'Test Item Title';
  $scope.one = 0;
  $scope.two = 0;
  $scope.three = 0;
  $scope.four = 0;
  $scope.five = 0;
  
  // Sample options for first chart
  $scope.chartOptions = {
    chart: {
        type: 'column'
    },
    title: {
        text: $scope.itemTitle
    },
    xAxis: {
        categories: ['One', 'Two', 'Three', 'Four', 'Five']
    },
    yAxis: {
      max: 5,
      title: {
          text: ''
      }
    },
    legend: {
      enabled: false
    },
    series: [{
        data: [$scope.one, $scope.two, $scope.three, $scope.four, $scope.five]
        // data: { one: $scope.one, two: $scope.two, three: $scope.three, four: $scope.four, five: $scope.five }
    }]
  };
  
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
    $scope.two += 1;
    $scope.userVote = '2';
    Vote.addVote2()
      .catch(function (err) {
        console.log(err);
      });
  };
  
  $scope.postVote3 = function() {
    $scope.userVote = '3';
    Vote.addVote3().
      catch(function (err) {
        console.log(err);
      });
  };
  
  $scope.postVote4 = function() {
    $scope.userVote = '4';
    Vote.addVote4().
      catch(function (err) {
        console.log(err);
      });
  };
  
  $scope.postVote5 = function() {
    $scope.userVote = '5';
    Vote.addVote5().
      catch(function (err) {
        console.log(err);
      });
  };
  
});