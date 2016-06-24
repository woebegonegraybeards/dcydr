
angular.module('VoteCtrl', [])

.controller('VotingController', function($scope, Vote, $interval, $location) {
  
  //---view2------------------------------------------------------
  
  $scope.chartOne = 0;

  // Takes user vote input and post to server - called when user clicks Y/N on view 2
  $scope.postVote1 = function() {
    $scope.userVote = '1';
    Vote.addVote1().
      catch(function (err) {
        console.log(err);
      });
  };

  $scope.postVote2 = function() {
    $scope.userVote = '2';
    Vote.addVote2().
      catch(function (err) {
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