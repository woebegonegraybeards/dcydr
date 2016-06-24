
angular.module('ChartCtrl', [])

.controller('ChartController', function($scope, Chart, $interval, $location) {
  
  $scope.itemTitle = 'Test Item Title';
  $scope.one = 0;
  $scope.two = 0;
  $scope.three = 5;
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
    }]
  };
  
  
});