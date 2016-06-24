
angular.module('ChartDirective', [])

//angular.module('ChartDirective')
.directive('hcChart', function () {
    return {
      restrict: 'EA',
      // templateUrl: '../views/chart.html',
      replace: false,
      scope: {
        options: '='
      },
      link: function (scope, element) {
        Highcharts.chart(element[0], scope.options);
      }
  };
});