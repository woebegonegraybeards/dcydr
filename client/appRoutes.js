angular.module('appRoutes', [])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider
  
  .when('/start', {
    templateUrl: 'views/start.html'
  })

  .when('/voteArea', {
    templateUrl: 'views/voteArea.html'
  })
  
  .when('/chart', {
    templateUrl: 'views/chart.html'
  })

  .when('/view3', {
    templateUrl: 'views/view3.html'
  })

  .otherwise({
    redirectTo: "/start"
  });

  $locationProvider.html5Mode({
    // uncommenting the line below would cosmetically make the urls look nicer in the browser without showing the "/#" in each route. However, it causes refresh not to work.
    // enabled: true,
    // This line was added because we seemed to be getting an error without it
    requireBase: false
  });

}]);