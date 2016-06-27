
angular.module('ChartDirective', [])

.directive('hcChart', function () {
    return {
      // restrict: 'EAC',
      restrict: 'C',
      // templateUrl: '../views/chart.html',
      replace: true,
      scope: {
        items: '=',
        votercount: '=',
        topic: '='
      },
      controller: function ($scope, $element, $attrs) {

      },
      
      template: '<div id="container" style="margin: 0 auto">not working</div>',
      
      link: function (scope, element, attrs) {
        var chart = new Highcharts.Chart({
          chart: {
            backgroundColor: '#eee',
            //   linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
            //   stops: [
            //     [0, '#2a2a2b'],
            //     [1, '#3e3e40']
            //   ]
            // },
            // style: {
            //    fontFamily: "'Unica One', sans-serif"
            // },
            // plotBorderColor: '#606063',
            type: 'column',
            renderTo: 'container',
            width: 500,
            height: 350
            // plotBackgroundColor: null,
            // plotBorderWidth: null,
            // plotShadow: false
          },
          legend: {
            enabled: false
          },
          title: {
            text: 'scope.title'
          },
          // tooltip: {
          //   pointFormat: '{series.name}: <b>{point.percentage}%</b>',
          //   percentageDecimals: 1
          // },
          xAxis: {
              categories: ['One', 'Two', 'Three', 'Four', 'Five']
          },
          yAxis: {
            max: scope.voterCount,
            min: 0,
            title: {
              // text: 'Task Difficulty'
              text: null
            }
          },
          series: [{
            // type: 'pie',
            name: 'Count',
            data: scope.items
          }]
        });
        scope.$watch("items", function (newValue) {
          chart.series[0].setData(newValue, true);
        }, true);
        
        scope.$watch("votercount", function (newValue) {
          chart.yAxis[0].setExtremes(0, newValue);
        }, true);
        scope.$watch("topic", function (newValue) {
          chart.setTitle({text: newValue});
        }, true);
      }
    };
});