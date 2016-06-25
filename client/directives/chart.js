
angular.module('ChartDirective', [])

.directive('hcChart', function () {
    return {
      restrict: 'EAC',
      // templateUrl: '../views/chart.html',
      replace: false,
      scope: {
        options: '='
      },
      link: function (scope, element) {
        Highcharts.chart(element[0], scope.options);
        // var highchart = new Highchart.chart({
        // // Highcharts.chart({
        //   chart: {
        //       type: 'column'
        //   },
        //   title: {
        //       text: 'test TITLE'
        //   },
        //   xAxis: {
        //       categories: ['One', 'Two', 'Three', 'Four', 'Five']
        //   },
        //   yAxis: {
        //     max: 5,
        //     title: {
        //         text: ''
        //     }
        //   },
        //   legend: {
        //     enabled: false
        //   },
        //   series: [{
        //       data: scope.votes
        //       // data: { one: $scope.one, two: $scope.two, three: $scope.three, four: $scope.four, five: $scope.five }
        //   }]
        // });
        // scope.$watch('votes', function(newVal){
        //   highchart.series[0].setData( newVal, true);
        // })
      },
    };
});