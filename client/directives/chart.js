
angular.module('ChartDirective', [])

.directive('hcChart', function () {
    return {
      // restrict: 'EAC',
      restrict: 'C',
      // templateUrl: '../views/chart.html',
      replace: true,
      scope: {
        items: '='
        // options: '=',
        // one: 0,
        // two: 0,
        // three: 0,
        // four: 0,
        // five: 0
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
          // plotOptions: {
          //   pie: {
          //     allowPointSelect: true,
          //     cursor: 'pointer',
          //     dataLabels: {
          //       enabled: true,
          //       color: '#000000',
          //       connectorColor: '#000000',
          //       formatter: function () {
          //         return '<b>' + this.point.name + '</b>: ' + this.percentage + ' %';
          //       }
          //     }
          //   }
          // },
          series: [{
            // type: 'pie',
            name: 'Browser share',
            data: scope.items
          }]
        });
        scope.$watch("items", function (newValue, oldValue) {
          console.log('newValue: ', newValue);
          console.log('oldValue: ', oldValue);
          chart.series[0].setData(newValue, true);
          // chart.redraw();
        }, true);
      }
      
      
      // link: function (scope, element) {
      //   // Highcharts.chart(element[0], scope.options),
      //   highchart = new Highcharts.Chart({
      //   // // Highcharts.chart({
      //     chart: {
      //         renderTo: 'chartContainer',
      //         type: 'column'
      //     },
      //     title: {
      //         text: 'test TITLE'
      //     },
      //     xAxis: {
      //         categories: ['One', 'Two', 'Three', 'Four', 'Five']
      //     },
      //     yAxis: {
      //       max: 5,
      //       title: {
      //           text: ''
      //       }
      //     },
      //     legend: {
      //       enabled: false
      //     },
      //     series: [{
      //         data: scope.votes
      //         // data: { one: $scope.one, two: $scope.two, three: $scope.three, four: $scope.four, five: $scope.five }
      //     }]
      //   });
      //   scope.$watch('votes', function(newVal){
      //     highchart.series[0].setData( newVal, true);
      //   })
      // },
    };
});