
angular.module('ChartDirective', [])

.directive('hcChart', function () {
    return {
      // restrict: 'EAC',
      restrict: 'C',
      // templateUrl: '../views/chart.html',
      replace: true,
      scope: {
        items: '='
      },
      controller: function ($scope, $element, $attrs) {

      },
      
      template: '<div id="container" style="margin: 0 auto">not working</div>',
      
      link: function (scope, element, attrs) {
        var chart = new Highcharts.Chart({
          chart: {
            type: 'column',
            renderTo: 'container',
            // plotBackgroundColor: null,
            // plotBorderWidth: null,
            // plotShadow: false
          },
          title: {
            text: 'Browser market shares at a specific website, 2010'
          },
          tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage}%</b>',
            percentageDecimals: 1
          },
          xAxis: {
              categories: ['One', 'Two', 'Three', 'Four', 'Five']
          },
          yAxis: {
            max: 5,
            title: {
                text: 'Task Difficulty'
            }
          },
          series: [{
            // type: 'pie',
            name: 'Browser share',
            data: scope.items
          }]
        });
        scope.$watch("items", function (newValue, oldValue) {
          chart.series[0].setData(newValue, true);
        }, true);
      }
    };
});