
angular.module('ChartService', [])

.factory('Chart', ['$http', '$location', function($http, $location) {

  return {

    // create the socket variable to be used to emit and listen in the controller
    // NOTE: for running on heroku (the deployed version), we'll need the socket to look there
    // socket: io('https://dcydr.herokuapp.com'),

    // IF INSTEAD you're running your app locally, just comment out the line above and uncomment the line below. Remember to switch it back before commiting!
    // socket: io('localhost:3000'),

    // viewToRouteConverter: {
    //   1: '/view1',
    //   2: '/view2',
    //   3: '/view3'
    // },
    
    
  };       
}])
